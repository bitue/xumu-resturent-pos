import { Controller, Get, Post, Put, Body, Param, UseGuards, Req } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto, ReservationDto } from './dto/table.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import type { Request } from 'express';

@Controller('api/tables')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  getAllTables() {
    return this.tableService.getAllTables();
  }

  @Get(':id')
  getTable(@Param('id') id: string) {
    return this.tableService.getTable(+id);
  }

  @Post()
  @Roles('ADMIN', 'MANAGER')
  createTable(@Body() dto: CreateTableDto, @Req() req: Request) {
    const user = req.user as any;
    return this.tableService.createTable(dto, user.email);
  }

  @Put(':id/status')
  updateTableStatus(@Param('id') id: string, @Body('status') status: string, @Req() req: Request) {
    const user = req.user as any;
    return this.tableService.updateTableStatus(+id, status, user.email);
  }

  @Get('reservations/all')
  getAllReservations() {
    return this.tableService.getAllReservations();
  }

  @Post('reservations')
  createReservation(@Body() dto: ReservationDto, @Req() req: Request) {
    const user = req.user as any;
    return this.tableService.createReservation(dto, user.email);
  }

  @Put('reservations/:id/status')
  updateReservationStatus(@Param('id') id: string, @Body('status') status: string, @Req() req: Request) {
    const user = req.user as any;
    return this.tableService.updateReservationStatus(+id, status, user.email);
  }
}
