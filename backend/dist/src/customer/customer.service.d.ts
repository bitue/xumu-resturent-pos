import { PrismaService } from '../common/prisma/prisma.service';
import { CreateCustomerDto } from './dto/customer.dto';
export declare class CustomerService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCustomers(): Promise<{
        success: boolean;
        data: {
            id: number;
            name: any;
            phoneNumber: any;
        }[];
    }>;
    getCustomer(id: number): Promise<{
        success: boolean;
        data: {
            id: number;
            name: any;
            phoneNumber: any;
        };
    }>;
    createCustomer(dto: CreateCustomerDto, username: string): Promise<{
        success: boolean;
        data: {
            id: number;
            name: any;
            phoneNumber: any;
        };
    }>;
    updateCustomer(id: number, dto: CreateCustomerDto, username: string): Promise<{
        success: boolean;
        data: {
            id: number;
            name: any;
            phoneNumber: any;
        };
    }>;
    private mapCustomer;
}
