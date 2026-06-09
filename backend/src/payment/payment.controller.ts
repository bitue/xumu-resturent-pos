import { Controller, Post, Get, Body, Param, UseGuards, Req } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentRequestDto } from './dto/payment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import type { Request } from 'express';

@Controller('api/orders/:orderId/payments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @Roles('ADMIN', 'MANAGER', 'CASHIER', 'WAITER')
  processPayment(
    @Param('orderId') orderId: string,
    @Body() dto: PaymentRequestDto,
    @Req() req: Request
  ) {
    const user = req.user as any;
    return this.paymentService.processPayment(+orderId, dto, user.email);
  }

  @Get()
  getPayments(@Param('orderId') orderId: string) {
    return this.paymentService.getPaymentsByOrderId(+orderId);
  }
}
