import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('api/reports')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN', 'MANAGER')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('daily-sales')
  getDailySales(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string
  ) {
    return this.reportService.getDailySales(startDate, endDate);
  }

  @Get('top-items')
  getTopSellingItems(@Query('limit') limit: string) {
    return this.reportService.getTopSellingItems(limit ? parseInt(limit, 10) : 10);
  }

  @Get('order-types')
  getOrderTypeAnalytics(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string
  ) {
    return this.reportService.getOrderTypeAnalytics(startDate, endDate);
  }

  @Get('hourly-revenue')
  getHourlyRevenue(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string
  ) {
    return this.reportService.getHourlyRevenue(startDate, endDate);
  }

  @Get('customers/ltv')
  getTopCustomersLtv(@Query('limit') limit: string) {
    return this.reportService.getTopCustomersLtv(limit ? parseInt(limit, 10) : 10);
  }

  @Get('customers/new-vs-returning')
  getNewVsReturningCustomers(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string
  ) {
    return this.reportService.getNewVsReturningCustomers(startDate, endDate);
  }
}
