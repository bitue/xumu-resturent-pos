import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateOrderDto } from './dto/order.dto';
import { randomUUID as uuidv4 } from 'crypto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(dto: CreateOrderDto, userId: number, username: string) {
    if (dto.idempotencyKey) {
      const existingOrder = await this.prisma.orders.findUnique({
        where: { idempotency_key: dto.idempotencyKey },
        include: { order_items: { include: { menu_items: true } } },
      });
      if (existingOrder) {
        return { success: true, data: this.mapOrder(existingOrder) };
      }
    }

    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException('Order must contain at least one item');
    }

    return this.prisma.$transaction(async (tx) => {
      let subtotal = 0;
      const orderItemsData: any[] = [];

      for (const itemDto of dto.items) {
        const menuItem = await tx.menu_items.findUnique({ where: { id: itemDto.menuItemId } });
        if (!menuItem) {
          throw new NotFoundException(`Menu item ${itemDto.menuItemId} not found`);
        }
        const itemTotal = Number(menuItem.price) * itemDto.quantity;
        subtotal += itemTotal;

        orderItemsData.push({
          menu_item_id: menuItem.id,
          quantity: itemDto.quantity,
          unit_price: menuItem.price,
          special_request: itemDto.specialRequest,
          status: 'PENDING',
        });
      }

      // Simplified tax calculation (e.g. 10%)
      const taxRate = 0.10;
      const tax = subtotal * taxRate;
      const total = subtotal + tax;

      const orderNumber = `ORD-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 1000)}`;

      const order = await tx.orders.create({
        data: {
          order_number: orderNumber,
          type: dto.type,
          status: 'PENDING',
          subtotal,
          tax,
          total,
          customer_note: dto.customerNote,
          table_id: dto.tableId,
          customer_id: dto.customerId,
          assigned_waiter_id: userId,
          idempotency_key: dto.idempotencyKey || uuidv4(),
          created_by: username,
          order_items: {
            create: orderItemsData,
          },
        },
        include: {
          order_items: { include: { menu_items: true } },
        },
      });

      return { success: true, data: this.mapOrder(order) };
    });
  }

  async getOrder(id: number) {
    const order = await this.prisma.orders.findUnique({
      where: { id },
      include: {
        order_items: { include: { menu_items: true } },
      },
    });
    if (!order) throw new NotFoundException('Order not found');
    return { success: true, data: this.mapOrder(order) };
  }

  async getAllOrders() {
    const orders = await this.prisma.orders.findMany({
      orderBy: { created_at: 'desc' },
      include: { order_items: { include: { menu_items: true } } },
    });
    return { success: true, data: orders.map(o => this.mapOrder(o)) };
  }

  async updateOrderStatus(id: number, status: string, username: string) {
    const order = await this.prisma.orders.update({
      where: { id },
      data: { status, updated_by: username, updated_at: new Date() },
      include: { order_items: { include: { menu_items: true } } },
    });
    return { success: true, data: this.mapOrder(order) };
  }

  async updateOrderItemStatus(orderId: number, itemId: number, status: string, username: string) {
    await this.prisma.order_items.update({
      where: { id: itemId },
      data: { status, updated_at: new Date() },
    });

    const order = await this.prisma.orders.findUnique({
      where: { id: orderId },
      include: { order_items: { include: { menu_items: true } } },
    });
    return { success: true, data: this.mapOrder(order) };
  }

  private mapOrder(o: any) {
    return {
      id: Number(o.id),
      orderNumber: o.order_number,
      type: o.type,
      status: o.status,
      subtotal: Number(o.subtotal),
      tax: Number(o.tax),
      discount: Number(o.discount),
      total: Number(o.total),
      customerNote: o.customer_note,
      tableId: o.table_id ? Number(o.table_id) : null,
      customerId: o.customer_id ? Number(o.customer_id) : null,
      assignedWaiterId: o.assigned_waiter_id ? Number(o.assigned_waiter_id) : null,
      idempotencyKey: o.idempotency_key,
      createdAt: o.created_at.toISOString(),
      items: o.order_items?.map((i: any) => ({
        id: Number(i.id),
        menuItemId: Number(i.menu_item_id),
        menuItemName: i.menu_items?.name,
        quantity: i.quantity,
        unitPrice: Number(i.unit_price),
        specialRequest: i.special_request,
        status: i.status,
      })) || [],
    };
  }
}
