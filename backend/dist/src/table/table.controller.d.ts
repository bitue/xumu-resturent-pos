import { TableService } from './table.service';
import { CreateTableDto, ReservationDto } from './dto/table.dto';
import type { Request } from 'express';
export declare class TableController {
    private readonly tableService;
    constructor(tableService: TableService);
    getAllTables(): Promise<{
        success: boolean;
        data: {
            id: number;
            tableNumber: any;
            capacity: any;
            status: any;
        }[];
    }>;
    getTable(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            tableNumber: any;
            capacity: any;
            status: any;
        };
    }>;
    createTable(dto: CreateTableDto, req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            tableNumber: any;
            capacity: any;
            status: any;
        };
    }>;
    updateTableStatus(id: string, status: string, req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            tableNumber: any;
            capacity: any;
            status: any;
        };
    }>;
    getAllReservations(): Promise<{
        success: boolean;
        data: {
            id: number;
            customerName: any;
            customerPhone: any;
            tableId: number | null;
            reservationTime: any;
            partySize: any;
            status: any;
            specialRequests: any;
        }[];
    }>;
    createReservation(dto: ReservationDto, req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            customerName: any;
            customerPhone: any;
            tableId: number | null;
            reservationTime: any;
            partySize: any;
            status: any;
            specialRequests: any;
        };
    }>;
    updateReservationStatus(id: string, status: string, req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            customerName: any;
            customerPhone: any;
            tableId: number | null;
            reservationTime: any;
            partySize: any;
            status: any;
            specialRequests: any;
        };
    }>;
}
