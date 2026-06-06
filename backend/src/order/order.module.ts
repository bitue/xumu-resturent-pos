import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { KdsController } from './kds.controller';
import { OrderService } from './order.service';

@Module({
  controllers: [OrderController, KdsController],
  providers: [OrderService]
})
export class OrderModule {}
