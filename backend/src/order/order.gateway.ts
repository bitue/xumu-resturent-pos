import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class OrderGateway {
  @WebSocketServer()
  server: Server;

  notifyOrderUpdate(order: any) {
    this.server.emit('orderUpdated', order);
  }

  notifyNewOrder(order: any) {
    this.server.emit('newOrder', order);
  }
}
