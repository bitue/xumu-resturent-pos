import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { PaymentRequestDto } from './dto/payment.dto';
import { randomUUID as uuidv4 } from 'crypto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async processPayment(orderId: number, dto: PaymentRequestDto, username: string) {
    return this.prisma.$transaction(async (tx) => {
      const order = await tx.orders.findUnique({
        where: { id: orderId },
        include: { payments: true },
      });

      if (!order) {
        throw new NotFoundException(`Order ${orderId} not found`);
      }

      if (order.status === 'COMPLETED' || order.status === 'CANCELLED') {
        throw new BadRequestException(`Cannot process payment for order in ${order.status} status`);
      }

      const totalPaid = order.payments.reduce((sum, p) => sum + Number(p.amount), 0);
      const remainingBalance = Number(order.total) - totalPaid;

      if (dto.amount > remainingBalance) {
        throw new BadRequestException('Payment amount exceeds remaining balance');
      }

      const payment = await tx.payments.create({
        data: {
          order_id: orderId,
          amount: dto.amount,
          payment_method: dto.method,
          status: 'COMPLETED', // Simplified for immediate success
          transaction_id: uuidv4(),
          created_by: username,
        },
      });

      const newTotalPaid = totalPaid + dto.amount;
      if (newTotalPaid >= Number(order.total)) {
        await tx.orders.update({
          where: { id: orderId },
          data: { status: 'COMPLETED', updated_at: new Date(), updated_by: username },
        });
      }

      return { success: true, data: this.mapPayment(payment) };
    });
  }

  async getPaymentsByOrderId(orderId: number) {
    const payments = await this.prisma.payments.findMany({
      where: { order_id: orderId },
      orderBy: { created_at: 'desc' },
    });
    return { success: true, data: payments.map(p => this.mapPayment(p)) };
  }

  private mapPayment(p: any) {
    return {
      id: Number(p.id),
      orderId: Number(p.order_id),
      amount: Number(p.amount),
      paymentMethod: p.payment_method,
      status: p.status,
      transactionId: p.transaction_id,
      createdAt: p.created_at.toISOString(),
    };
  }
}
