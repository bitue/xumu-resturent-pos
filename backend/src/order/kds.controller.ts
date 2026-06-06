import { Controller, Get, Patch, Body, Param, UseGuards, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import type { Request } from 'express';

@Controller('api/kds')
@UseGuards(JwtAuthGuard, RolesGuard)
export class KdsController {
  constructor(private readonly orderService: OrderService) {}

  @Get('active')
  getActiveKdsItems() {
    return this.orderService.getActiveKdsItems();
  }

  @Patch('items/:id/status')
  updateItemStatus(@Param('id') id: string, @Body('status') status: string, @Req() req: Request) {
    const user = req.user as any;
    return this.orderService.updateOrderItemStatusById(+id, status, user.email);
  }
}
