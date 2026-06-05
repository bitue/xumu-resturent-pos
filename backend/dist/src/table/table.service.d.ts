import { PrismaService } from '../common/prisma/prisma.service';
import { CreateTableDto, ReservationDto } from './dto/table.dto';
export declare class TableService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllTables(): Promise<{
        success: boolean;
        data: {
            id: number;
            tableNumber: any;
            capacity: any;
            status: any;
        }[];
    }>;
    getTable(id: number): Promise<{
        success: boolean;
        data: {
            id: number;
            tableNumber: any;
            capacity: any;
            status: any;
        };
    }>;
    createTable(dto: CreateTableDto, username: string): Promise<{
        success: boolean;
        data: {
            id: number;
            tableNumber: any;
            capacity: any;
            status: any;
        };
    }>;
    updateTableStatus(id: number, status: string, username: string): Promise<{
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
    createReservation(dto: ReservationDto, username: string): Promise<{
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
    updateReservationStatus(id: number, status: string, username: string): Promise<{
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
    private mapTable;
    private mapReservation;
}
