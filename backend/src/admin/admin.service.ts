import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    const users = await this.prisma.users.findMany({
      include: {
        user_roles: {
          include: { roles: true },
        },
      },
      orderBy: { created_at: 'asc' },
    });

    return {
      success: true,
      data: users.map(u => ({
        id: Number(u.id),
        email: u.email,
        fullName: u.full_name,
        phone: u.phone,
        enabled: u.enabled,
        provider: u.provider,
        roles: u.user_roles.map(ur => ur.roles.name),
        createdAt: u.created_at,
      })),
    };
  }

  async updateUserRoles(userId: number, roles: string[]) {
    // Find role records
    const roleRecords = await this.prisma.roles.findMany({
      where: { name: { in: roles } },
    });

    await this.prisma.$transaction(async (tx) => {
      // Remove all existing roles
      await tx.user_roles.deleteMany({ where: { user_id: userId } });
      // Assign new roles
      await tx.user_roles.createMany({
        data: roleRecords.map(r => ({ user_id: BigInt(userId), role_id: r.id })),
      });
    });

    return { success: true, message: 'Roles updated' };
  }

  async updateUserStatus(userId: number, enabled: boolean) {
    await this.prisma.users.update({
      where: { id: userId },
      data: { enabled },
    });
    return { success: true, message: `User ${enabled ? 'activated' : 'deactivated'}` };
  }
}
