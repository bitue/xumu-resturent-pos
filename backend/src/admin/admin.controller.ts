import { Controller, Get, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('api/admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN', 'MANAGER')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('users')
  getUsers() {
    return this.adminService.getUsers();
  }

  @Patch('users/:id/roles')
  updateUserRoles(@Param('id') id: string, @Body('roles') roles: string[]) {
    return this.adminService.updateUserRoles(Number(id), roles);
  }

  @Patch('users/:id/status')
  updateUserStatus(@Param('id') id: string, @Body('enabled') enabled: boolean) {
    return this.adminService.updateUserStatus(Number(id), enabled);
  }
}
