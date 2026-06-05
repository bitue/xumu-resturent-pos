import { PrismaService } from '../common/prisma/prisma.service';
import { PaymentRequestDto } from './dto/payment.dto';
export declare class PaymentService {
    private prisma;
    constructor(prisma: PrismaService);
    processPayment(orderId: number, dto: PaymentRequestDto, username: string): Promise<{
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
    getPaymentsByOrderId(orderId: number): Promise<{
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
    private mapPayment;
}
