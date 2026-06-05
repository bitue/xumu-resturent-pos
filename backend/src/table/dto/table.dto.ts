import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, IsDateString, IsEnum } from 'class-validator';

export class CreateTableDto {
  @IsNotEmpty({ message: 'Table number is required' })
  @IsString()
  tableNumber: string;

  @IsNotEmpty({ message: 'Capacity is required' })
  @IsNumber()
  @Min(1, { message: 'Capacity must be at least 1' })
  capacity: number;
}

export class ReservationDto {
  @IsNotEmpty({ message: 'Customer name is required' })
  @IsString()
  customerName: string;

  @IsNotEmpty({ message: 'Customer phone is required' })
  @IsString()
  customerPhone: string;

  @IsOptional()
  @IsNumber()
  tableId?: number;

  @IsNotEmpty({ message: 'Reservation time is required' })
  @IsDateString({}, { message: 'Reservation time must be a valid date' })
  reservationTime: string;

  @IsNotEmpty({ message: 'Party size is required' })
  @IsNumber()
  @Min(1, { message: 'Party size must be at least 1' })
  partySize: number;

  @IsOptional()
  @IsString()
  specialRequests?: string;
}
