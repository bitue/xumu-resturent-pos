import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateCustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async getAllCustomers() {
    const customers = await this.prisma.customers.findMany({
      orderBy: { name: 'asc' },
    });
    return { success: true, data: customers.map(c => this.mapCustomer(c)) };
  }

  async getCustomer(id: number) {
    const customer = await this.prisma.customers.findUnique({
      where: { id },
    });
    if (!customer) throw new NotFoundException('Customer not found');
    return { success: true, data: this.mapCustomer(customer) };
  }

  async createCustomer(dto: CreateCustomerDto, username: string) {
    const existing = await this.prisma.customers.findUnique({
      where: { phone_number: dto.phoneNumber },
    });
    if (existing) {
      throw new ConflictException('Customer with this phone number already exists');
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

  async updateCustomer(id: number, dto: CreateCustomerDto, username: string) {
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

  private mapCustomer(c: any) {
    return {
      id: Number(c.id),
      name: c.name,
      phoneNumber: c.phone_number,
    };
  }
}
