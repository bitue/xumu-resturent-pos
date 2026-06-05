import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateTableDto, ReservationDto } from './dto/table.dto';

@Injectable()
export class TableService {
  constructor(private prisma: PrismaService) {}

  async getAllTables() {
    const tables = await this.prisma.restaurant_tables.findMany({
      orderBy: { table_number: 'asc' },
    });
    return { success: true, data: tables.map(t => this.mapTable(t)) };
  }

  async getTable(id: number) {
    const table = await this.prisma.restaurant_tables.findUnique({
      where: { id },
    });
    if (!table) throw new NotFoundException('Table not found');
    return { success: true, data: this.mapTable(table) };
  }

  async createTable(dto: CreateTableDto, username: string) {
    const table = await this.prisma.restaurant_tables.create({
      data: {
        table_number: dto.tableNumber,
        capacity: dto.capacity,
        status: 'AVAILABLE',
        created_by: username,
      },
    });
    return { success: true, data: this.mapTable(table) };
  }

  async updateTableStatus(id: number, status: string, username: string) {
    const table = await this.prisma.restaurant_tables.update({
      where: { id },
      data: { status, updated_by: username, updated_at: new Date() },
    });
    return { success: true, data: this.mapTable(table) };
  }

  async getAllReservations() {
    const reservations = await this.prisma.reservations.findMany({
      orderBy: { reservation_time: 'asc' },
    });
    return { success: true, data: reservations.map(r => this.mapReservation(r)) };
  }

  async createReservation(dto: ReservationDto, username: string) {
    const reservation = await this.prisma.reservations.create({
      data: {
        customer_name: dto.customerName,
        customer_phone: dto.customerPhone,
        table_id: dto.tableId,
        reservation_time: new Date(dto.reservationTime),
        party_size: dto.partySize,
        special_requests: dto.specialRequests,
        status: 'PENDING',
        created_by: username,
      },
    });
    return { success: true, data: this.mapReservation(reservation) };
  }

  async updateReservationStatus(id: number, status: string, username: string) {
    const reservation = await this.prisma.reservations.update({
      where: { id },
      data: { status, updated_by: username, updated_at: new Date() },
    });
    return { success: true, data: this.mapReservation(reservation) };
  }

  private mapTable(t: any) {
    return {
      id: Number(t.id),
      tableNumber: t.table_number,
      capacity: t.capacity,
      status: t.status,
    };
  }

  private mapReservation(r: any) {
    return {
      id: Number(r.id),
      customerName: r.customer_name,
      customerPhone: r.customer_phone,
      tableId: r.table_id ? Number(r.table_id) : null,
      reservationTime: r.reservation_time.toISOString(),
      partySize: r.party_size,
      status: r.status,
      specialRequests: r.special_requests,
    };
  }
}
