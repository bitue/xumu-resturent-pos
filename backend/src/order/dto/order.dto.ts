import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, ValidateNested, IsArray, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export enum OrderType {
  DINE_IN = 'DINE_IN',
  TAKEAWAY = 'TAKEAWAY',
  DELIVERY = 'DELIVERY',
}

export class CreateOrderItemDto {
  @IsNotEmpty()
  @IsNumber()
  menuItemId: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantity: number;

  @IsOptional()
  @IsString()
  specialRequest?: string;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @IsEnum(OrderType)
  type: OrderType;

  @IsOptional()
  @IsNumber()
  tableId?: number;

  @IsOptional()
  @IsNumber()
  customerId?: number;

  @IsOptional()
  @IsString()
  idempotencyKey?: string;

  @IsOptional()
  @IsString()
  customerNote?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];
}
