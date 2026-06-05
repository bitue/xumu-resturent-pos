import { Controller, Get, Post, Put, Body, Param, UseGuards, Req } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/customer.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import type { Request } from 'express';

@Controller('api/customers')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Get(':id')
  getCustomer(@Param('id') id: string) {
    return this.customerService.getCustomer(+id);
  }

  @Post()
  @Roles('ADMIN', 'MANAGER', 'CASHIER')
  createCustomer(@Body() dto: CreateCustomerDto, @Req() req: Request) {
    const user = req.user as any;
    return this.customerService.createCustomer(dto, user.email);
  }

  @Put(':id')
  @Roles('ADMIN', 'MANAGER')
  updateCustomer(@Param('id') id: string, @Body() dto: CreateCustomerDto, @Req() req: Request) {
    const user = req.user as any;
    return this.customerService.updateCustomer(+id, dto, user.email);
  }
}
