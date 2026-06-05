"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
const crypto_1 = require("crypto");
let OrderService = class OrderService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createOrder(dto, userId, username) {
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
            throw new common_1.BadRequestException('Order must contain at least one item');
        }
        return this.prisma.$transaction(async (tx) => {
            let subtotal = 0;
            const orderItemsData = [];
            for (const itemDto of dto.items) {
                const menuItem = await tx.menu_items.findUnique({ where: { id: itemDto.menuItemId } });
                if (!menuItem) {
                    throw new common_1.NotFoundException(`Menu item ${itemDto.menuItemId} not found`);
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
                    idempotency_key: dto.idempotencyKey || (0, crypto_1.randomUUID)(),
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
    async getOrder(id) {
        const order = await this.prisma.orders.findUnique({
            where: { id },
            include: {
                order_items: { include: { menu_items: true } },
            },
        });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        return { success: true, data: this.mapOrder(order) };
    }
    async getAllOrders() {
        const orders = await this.prisma.orders.findMany({
            orderBy: { created_at: 'desc' },
            include: { order_items: { include: { menu_items: true } } },
        });
        return { success: true, data: orders.map(o => this.mapOrder(o)) };
    }
    async updateOrderStatus(id, status, username) {
        const order = await this.prisma.orders.update({
            where: { id },
            data: { status, updated_by: username, updated_at: new Date() },
            include: { order_items: { include: { menu_items: true } } },
        });
        return { success: true, data: this.mapOrder(order) };
    }
    async updateOrderItemStatus(orderId, itemId, status, username) {
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
    mapOrder(o) {
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
            items: o.order_items?.map((i) => ({
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
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map