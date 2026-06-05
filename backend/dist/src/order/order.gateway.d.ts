import { Server } from 'socket.io';
export declare class OrderGateway {
    server: Server;
    notifyOrderUpdate(order: any): void;
    notifyNewOrder(order: any): void;
}
