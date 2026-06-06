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
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
let ReportService = class ReportService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDailySales(startDate, endDate) {
        const result = await this.prisma.$queryRaw `
      SELECT CAST(created_at AS date) as "date",
             COUNT(*) as "orderCount",
             COALESCE(SUM(total), 0) as "totalRevenue",
             COALESCE(SUM(tax), 0) as "totalTax",
             COALESCE(SUM(discount), 0) as "totalDiscount"
      FROM orders
      WHERE created_at >= ${new Date(startDate)} AND created_at <= ${new Date(endDate)}
      AND status = 'PAID'
      GROUP BY CAST(created_at AS date)
      ORDER BY "date" DESC
    `;
        return { success: true, data: result };
    }
    async getTopSellingItems(limit = 10) {
        const result = await this.prisma.$queryRaw `
      SELECT m.id, m.name_nl as "menuItemNameNl", m.name_en as "menuItemNameEn", COUNT(oi.id) as "quantitySold", COALESCE(SUM(oi.quantity * oi.unit_price), 0) as "revenue"
      FROM menu_items m
      JOIN order_items oi ON m.id = oi.menu_item_id
      JOIN orders o ON o.id = oi.order_id
      WHERE o.status = 'PAID'
      GROUP BY m.id, m.name_nl, m.name_en
      ORDER BY "quantitySold" DESC
      LIMIT ${Number(limit)}
    `;
        return { success: true, data: result };
    }
    async getOrderTypeAnalytics(startDate, endDate) {
        const result = await this.prisma.$queryRaw `
      SELECT type as "orderType", COUNT(*) as "orderCount", COALESCE(SUM(total), 0) as "revenue"
      FROM orders
      WHERE created_at >= ${new Date(startDate)} AND created_at <= ${new Date(endDate)}
      AND status = 'PAID'
      GROUP BY type
    `;
        return { success: true, data: result };
    }
    async getHourlyRevenue(startDate, endDate) {
        const result = await this.prisma.$queryRaw `
      SELECT EXTRACT(HOUR FROM created_at) as "timePeriod", COUNT(*) as "orderCount", COALESCE(SUM(total), 0) as "revenue"
      FROM orders
      WHERE created_at >= ${new Date(startDate)} AND created_at <= ${new Date(endDate)}
      AND status = 'PAID'
      GROUP BY EXTRACT(HOUR FROM created_at)
      ORDER BY "timePeriod" ASC
    `;
        return { success: true, data: result.map(r => ({
                ...r,
                timePeriod: String(r.timePeriod),
                orderCount: Number(r.orderCount)
            })) };
    }
    async getTopCustomersLtv(limit = 10) {
        const result = await this.prisma.$queryRaw `
      SELECT c.id as "customerId", c.name as "customerName", c.phone_number as "phoneNumber",
             COUNT(o.id) as "totalOrders", COALESCE(SUM(o.total), 0) as "lifetimeValue"
      FROM customers c
      JOIN orders o ON c.id = o.customer_id
      WHERE o.status = 'PAID'
      GROUP BY c.id, c.name, c.phone_number
      ORDER BY "lifetimeValue" DESC
      LIMIT ${Number(limit)}
    `;
        return { success: true, data: result.map(r => ({
                ...r,
                customerId: Number(r.customerId),
                totalOrders: Number(r.totalOrders)
            })) };
    }
    async getNewVsReturningCustomers(startDate, endDate) {
        const result = await this.prisma.$queryRaw `
      WITH customer_orders AS (
        SELECT customer_id, MIN(created_at) as first_order_date
        FROM orders
        WHERE status = 'PAID' AND customer_id IS NOT NULL
        GROUP BY customer_id
      )
      SELECT
        COALESCE(SUM(CASE WHEN co.first_order_date >= ${new Date(startDate)} AND co.first_order_date <= ${new Date(endDate)} THEN 1 ELSE 0 END), 0) as "newCustomersCount",
        COALESCE(SUM(CASE WHEN co.first_order_date < ${new Date(startDate)} THEN 1 ELSE 0 END), 0) as "returningCustomersCount"
      FROM customer_orders co
      JOIN orders o ON o.customer_id = co.customer_id
      WHERE o.status = 'PAID' AND o.created_at >= ${new Date(startDate)} AND o.created_at <= ${new Date(endDate)}
    `;
        if (!result || result.length === 0) {
            return { success: true, data: { newCustomersCount: 0, returningCustomersCount: 0 } };
        }
        return { success: true, data: {
                newCustomersCount: Number(result[0].newCustomersCount),
                returningCustomersCount: Number(result[0].returningCustomersCount)
            } };
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportService);
//# sourceMappingURL=report.service.js.map