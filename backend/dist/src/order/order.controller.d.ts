import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';
import type { Request } from 'express';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
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
    getOrder(id: string): Promise<{
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
    createOrder(dto: CreateOrderDto, req: Request): Promise<{
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
    updateOrderStatus(id: string, status: string, req: Request): Promise<{
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
    updateOrderItemStatus(orderId: string, itemId: string, status: string, req: Request): Promise<{
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
}
