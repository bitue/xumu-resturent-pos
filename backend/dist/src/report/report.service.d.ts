import { PrismaService } from '../common/prisma/prisma.service';
export declare class ReportService {
    private prisma;
    constructor(prisma: PrismaService);
    getDailySales(startDate: string, endDate: string): Promise<{
        success: boolean;
        data: unknown;
    }>;
    getTopSellingItems(limit?: number): Promise<{
        success: boolean;
        data: unknown;
    }>;
    getOrderTypeAnalytics(startDate: string, endDate: string): Promise<{
        success: boolean;
        data: unknown;
    }>;
    getHourlyRevenue(startDate: string, endDate: string): Promise<{
        success: boolean;
        data: any[];
    }>;
    getTopCustomersLtv(limit?: number): Promise<{
        success: boolean;
        data: any[];
    }>;
    getNewVsReturningCustomers(startDate: string, endDate: string): Promise<{
        success: boolean;
        data: {
            newCustomersCount: number;
            returningCustomersCount: number;
        };
    }>;
}
