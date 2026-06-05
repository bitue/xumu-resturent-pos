export declare enum OrderType {
    DINE_IN = "DINE_IN",
    TAKEAWAY = "TAKEAWAY",
    DELIVERY = "DELIVERY"
}
export declare class CreateOrderItemDto {
    menuItemId: number;
    quantity: number;
    specialRequest?: string;
}
export declare class CreateOrderDto {
    type: OrderType;
    tableId?: number;
    customerId?: number;
    idempotencyKey?: string;
    customerNote?: string;
    items: CreateOrderItemDto[];
}
