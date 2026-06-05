import { PrismaService } from '../common/prisma/prisma.service';
import { CreateOrderDto } from './dto/order.dto';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    createOrder(dto: CreateOrderDto, userId: number, username: string): Promise<{
        success: boolean;
        data: {
            id: number;
            orderNumber: any;
            type: any;
            status: any;
            subtotal: number;
            tax: number;
            discount: number;
            total: number;
            customerNote: any;
            tableId: number | null;
            customerId: number | null;
            assignedWaiterId: number | null;
            idempotencyKey: any;
            createdAt: any;
            items: any;
        };
    }>;
    getOrder(id: number): Promise<{
        success: boolean;
        data: {
            id: number;
            orderNumber: any;
            type: any;
            status: any;
            subtotal: number;
            tax: number;
            discount: number;
            total: number;
            customerNote: any;
            tableId: number | null;
            customerId: number | null;
            assignedWaiterId: number | null;
            idempotencyKey: any;
            createdAt: any;
            items: any;
        };
    }>;
    getAllOrders(): Promise<{
        success: boolean;
        data: {
            id: number;
            orderNumber: any;
            type: any;
            status: any;
            subtotal: number;
            tax: number;
            discount: number;
            total: number;
            customerNote: any;
            tableId: number | null;
            customerId: number | null;
            assignedWaiterId: number | null;
            idempotencyKey: any;
            createdAt: any;
            items: any;
        }[];
    }>;
    updateOrderStatus(id: number, status: string, username: string): Promise<{
        success: boolean;
        data: {
            id: number;
            orderNumber: any;
            type: any;
            status: any;
            subtotal: number;
            tax: number;
            discount: number;
            total: number;
            customerNote: any;
            tableId: number | null;
            customerId: number | null;
            assignedWaiterId: number | null;
            idempotencyKey: any;
            createdAt: any;
            items: any;
        };
    }>;
    updateOrderItemStatus(orderId: number, itemId: number, status: string, username: string): Promise<{
        success: boolean;
        data: {
            id: number;
            orderNumber: any;
            type: any;
            status: any;
            subtotal: number;
            tax: number;
            discount: number;
            total: number;
            customerNote: any;
            tableId: number | null;
            customerId: number | null;
            assignedWaiterId: number | null;
            idempotencyKey: any;
            createdAt: any;
            items: any;
        };
    }>;
    private mapOrder;
}
