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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
let CustomerService = class CustomerService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllCustomers() {
        const customers = await this.prisma.customers.findMany({
            orderBy: { name: 'asc' },
        });
        return { success: true, data: customers.map(c => this.mapCustomer(c)) };
    }
    async getCustomer(id) {
        const customer = await this.prisma.customers.findUnique({
            where: { id },
        });
        if (!customer)
            throw new common_1.NotFoundException('Customer not found');
        return { success: true, data: this.mapCustomer(customer) };
    }
    async createCustomer(dto, username) {
        const existing = await this.prisma.customers.findUnique({
            where: { phone_number: dto.phoneNumber },
        });
        if (existing) {
            throw new common_1.ConflictException('Customer with this phone number already exists');
        }
        const customer = await this.prisma.customers.create({
            data: {
                name: dto.name,
                phone_number: dto.phoneNumber,
                created_by: username,
            },
        });
        return { success: true, data: this.mapCustomer(customer) };
    }
    async updateCustomer(id, dto, username) {
        const customer = await this.prisma.customers.update({
            where: { id },
            data: {
                name: dto.name,
                phone_number: dto.phoneNumber,
                updated_by: username,
                updated_at: new Date(),
            },
        });
        return { success: true, data: this.mapCustomer(customer) };
    }
    mapCustomer(c) {
        return {
            id: Number(c.id),
            name: c.name,
            phoneNumber: c.phone_number,
        };
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CustomerService);
//# sourceMappingURL=customer.service.js.map