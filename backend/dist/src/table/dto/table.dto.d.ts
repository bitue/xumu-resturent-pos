export declare class CreateTableDto {
    tableNumber: string;
    capacity: number;
}
export declare class ReservationDto {
    customerName: string;
    customerPhone: string;
    tableId?: number;
    reservationTime: string;
    partySize: number;
    specialRequests?: string;
}
