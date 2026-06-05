import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateCategoryDto, CreateMenuItemDto } from './dto/menu.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import type { Request } from 'express';

@Controller('api/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('categories')
  getCategories() {
    return this.menuService.getCategories();
  }

  @Post('categories')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  createCategory(@Body() dto: CreateCategoryDto, @Req() req: Request) {
    const user = req.user as any;
    return this.menuService.createCategory(dto, user.email);
  }

  @Get('items')
  getMenuItems() {
    return this.menuService.getMenuItems();
  }

  @Get('items/:id')
  getMenuItem(@Param('id') id: string) {
    return this.menuService.getMenuItem(+id);
  }

  @Post('items')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'MANAGER')
  createMenuItem(@Body() dto: CreateMenuItemDto, @Req() req: Request) {
    const user = req.user as any;
    return this.menuService.createMenuItem(dto, user.email);
  }
}
