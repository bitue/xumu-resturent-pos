import { ReportService } from './report.service';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    getDailySales(startDate: string, endDate: string): Promise<{
        success: boolean;
        data: unknown;
    }>;
    getTopSellingItems(limit: string): Promise<{
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
    getTopCustomersLtv(limit: string): Promise<{
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
