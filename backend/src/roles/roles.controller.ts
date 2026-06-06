import { Controller, Get, Put, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { RolesService } from './roles.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';

@Controller('api/roles')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('SUPER_ADMIN') // Only SUPER_ADMIN can manage roles
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  async findAll() {
    const roles = await this.rolesService.findAll();
    // Serialize bigints to string
    return {
      success: true,
      data: roles.map(r => ({
        id: r.id.toString(),
        name: r.name,
        description: r.description,
        permissions: r.role_permissions.map(rp => ({
          id: rp.permissions.id.toString(),
          name: rp.permissions.name,
          description: rp.permissions.description,
        })),
      })),
    };
  }

  @Get('permissions')
  async findAllPermissions() {
    const permissions = await this.rolesService.findAllPermissions();
    return {
      success: true,
      data: permissions.map(p => ({
        id: p.id.toString(),
        name: p.name,
        description: p.description,
      })),
    };
  }

  @Post()
  async createRole(@Body('name') name: string, @Body('description') description: string) {
    const role = await this.rolesService.createRole(name, description);
    return {
      success: true,
      data: {
        id: role?.id.toString(),
        name: role?.name,
        description: role?.description,
        permissions: [],
      },
    };
  }

  @Put(':id/permissions')
  async updateRolePermissions(
    @Param('id') id: string,
    @Body('permissionIds') permissionIds: string[]
  ) {
    const roleId = BigInt(id);
    const pIds = permissionIds.map(pId => BigInt(pId));
    const role = await this.rolesService.updateRolePermissions(roleId, pIds);
    return {
      success: true,
      data: {
        id: role?.id.toString(),
        name: role?.name,
        description: role?.description,
      },
    };
  }
}
