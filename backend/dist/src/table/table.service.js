"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
let TableService = class TableService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllTables() {
        const tables = await this.prisma.restaurant_tables.findMany({
            orderBy: { table_number: 'asc' },
        });
        return { success: true, data: tables.map(t => this.mapTable(t)) };
    }
    async getTable(id) {
        const table = await this.prisma.restaurant_tables.findUnique({
            where: { id },
        });
        if (!table)
            throw new common_1.NotFoundException('Table not found');
        return { success: true, data: this.mapTable(table) };
    }
    async createTable(dto, username) {
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
    async updateTableStatus(id, status, username) {
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
    async createReservation(dto, username) {
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
    async updateReservationStatus(id, status, username) {
        const reservation = await this.prisma.reservations.update({
            where: { id },
            data: { status, updated_by: username, updated_at: new Date() },
        });
        return { success: true, data: this.mapReservation(reservation) };
    }
    mapTable(t) {
        return {
            id: Number(t.id),
            tableNumber: t.table_number,
            capacity: t.capacity,
            status: t.status,
        };
    }
    mapReservation(r) {
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
};
exports.TableService = TableService;
exports.TableService = TableService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TableService);
//# sourceMappingURL=table.service.js.map