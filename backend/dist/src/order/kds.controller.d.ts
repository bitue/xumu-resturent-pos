import { OrderService } from './order.service';
import type { Request } from 'express';
export declare class KdsController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getActiveKdsItems(): Promise<{
        success: boolean;
        data: {
            id: number;
            orderNumber: string;
            status: string;
            orderedAt: string;
            menuItemName: string;
            quantity: number;
            specialRequest: string | null;
            tableId: number;
        }[];
    }>;
    updateItemStatus(id: string, status: string, req: Request): Promise<{
        success: boolean;
    }>;
}
