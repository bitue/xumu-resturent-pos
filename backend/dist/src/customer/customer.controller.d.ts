import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/customer.dto';
import type { Request } from 'express';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    getAllCustomers(): Promise<{
        success: boolean;
        data: {
            id: number;
            name: any;
            phoneNumber: any;
        }[];
    }>;
    getCustomer(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            name: any;
            phoneNumber: any;
        };
    }>;
    createCustomer(dto: CreateCustomerDto, req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            name: any;
            phoneNumber: any;
        };
    }>;
    updateCustomer(id: string, dto: CreateCustomerDto, req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            name: any;
            phoneNumber: any;
        };
    }>;
}
