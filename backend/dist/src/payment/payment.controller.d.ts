import { PaymentService } from './payment.service';
import { PaymentRequestDto } from './dto/payment.dto';
import type { Request } from 'express';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    processPayment(orderId: string, dto: PaymentRequestDto, req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            orderId: number;
            amount: number;
            paymentMethod: any;
            status: any;
            transactionId: any;
            createdAt: any;
        };
    }>;
    getPayments(orderId: string): Promise<{
        success: boolean;
        data: {
            id: number;
            orderId: number;
            amount: number;
            paymentMethod: any;
            status: any;
            transactionId: any;
            createdAt: any;
        }[];
    }>;
}
