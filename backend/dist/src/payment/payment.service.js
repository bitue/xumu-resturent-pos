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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
const crypto_1 = require("crypto");
let PaymentService = class PaymentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async processPayment(orderId, dto, username) {
        return this.prisma.$transaction(async (tx) => {
            const order = await tx.orders.findUnique({
                where: { id: orderId },
                include: { payments: true },
            });
            if (!order) {
                throw new common_1.NotFoundException(`Order ${orderId} not found`);
            }
            if (order.status === 'COMPLETED' || order.status === 'CANCELLED') {
                throw new common_1.BadRequestException(`Cannot process payment for order in ${order.status} status`);
            }
            const totalPaid = order.payments.reduce((sum, p) => sum + Number(p.amount), 0);
            const remainingBalance = Number(order.total) - totalPaid;
            if (dto.amount > remainingBalance) {
                throw new common_1.BadRequestException('Payment amount exceeds remaining balance');
            }
            const payment = await tx.payments.create({
                data: {
                    order_id: orderId,
                    amount: dto.amount,
                    payment_method: dto.method,
                    status: 'COMPLETED',
                    transaction_id: (0, crypto_1.randomUUID)(),
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
    async getPaymentsByOrderId(orderId) {
        const payments = await this.prisma.payments.findMany({
            where: { order_id: orderId },
            orderBy: { created_at: 'desc' },
        });
        return { success: true, data: payments.map(p => this.mapPayment(p)) };
    }
    mapPayment(p) {
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
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map