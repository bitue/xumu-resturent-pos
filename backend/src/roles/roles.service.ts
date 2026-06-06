import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.roles.findMany({
      include: {
        role_permissions: {
          include: {
            permissions: true,
          },
        },
      },
    });
  }

  async findAllPermissions() {
    return this.prisma.permissions.findMany();
  }

  async createRole(name: string, description: string) {
    const role = await this.prisma.roles.create({
      data: { name, description },
    });
    return this.prisma.roles.findUnique({
      where: { id: role.id },
      include: {
        role_permissions: {
          include: {
            permissions: true,
          },
        },
      },
    });
  }

  async updateRolePermissions(roleId: bigint, permissionIds: bigint[]) {
    // Check if role exists
    const role = await this.prisma.roles.findUnique({
      where: { id: roleId },
    });

    if (!role) {
      throw new NotFoundException('Role not found');
    }

    // Use a transaction to delete existing permissions and insert new ones
    await this.prisma.$transaction(async (tx) => {
      // Delete existing
      await tx.role_permissions.deleteMany({
        where: { role_id: roleId },
      });

      // Insert new
      if (permissionIds.length > 0) {
        await tx.role_permissions.createMany({
          data: permissionIds.map((permId) => ({
            role_id: roleId,
            permission_id: permId,
          })),
        });
      }
    });

    return this.prisma.roles.findUnique({
      where: { id: roleId },
      include: {
        role_permissions: {
          include: {
            permissions: true,
          },
        },
      },
    });
  }
}
