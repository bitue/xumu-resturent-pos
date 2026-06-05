import { Controller, Get, Post, Put, Body, Param, UseGuards, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import type { Request } from 'express';

@Controller('api/orders')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getAllOrders() {
    return this.orderService.getAllOrders();
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.orderService.getOrder(+id);
  }

  @Post()
  @Roles('ADMIN', 'MANAGER', 'WAITER', 'CASHIER')
  createOrder(@Body() dto: CreateOrderDto, @Req() req: Request) {
    const user = req.user as any;
    return this.orderService.createOrder(dto, user.id, user.email);
  }

  @Put(':id/status')
  updateOrderStatus(@Param('id') id: string, @Body('status') status: string, @Req() req: Request) {
    const user = req.user as any;
    return this.orderService.updateOrderStatus(+id, status, user.email);
  }

  @Put(':orderId/items/:itemId/status')
  updateOrderItemStatus(
    @Param('orderId') orderId: string,
    @Param('itemId') itemId: string,
    @Body('status') status: string,
    @Req() req: Request
  ) {
    const user = req.user as any;
    return this.orderService.updateOrderItemStatus(+orderId, +itemId, status, user.email);
  }
}
