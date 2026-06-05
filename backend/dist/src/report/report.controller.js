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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const report_service_1 = require("./report.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let ReportController = class ReportController {
    reportService;
    constructor(reportService) {
        this.reportService = reportService;
    }
    getDailySales(startDate, endDate) {
        return this.reportService.getDailySales(startDate, endDate);
    }
    getTopSellingItems(limit) {
        return this.reportService.getTopSellingItems(limit ? parseInt(limit, 10) : 10);
    }
    getOrderTypeAnalytics(startDate, endDate) {
        return this.reportService.getOrderTypeAnalytics(startDate, endDate);
    }
    getHourlyRevenue(startDate, endDate) {
        return this.reportService.getHourlyRevenue(startDate, endDate);
    }
    getTopCustomersLtv(limit) {
        return this.reportService.getTopCustomersLtv(limit ? parseInt(limit, 10) : 10);
    }
    getNewVsReturningCustomers(startDate, endDate) {
        return this.reportService.getNewVsReturningCustomers(startDate, endDate);
    }
};
exports.ReportController = ReportController;
__decorate([
    (0, common_1.Get)('daily-sales'),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getDailySales", null);
__decorate([
    (0, common_1.Get)('top-items'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getTopSellingItems", null);
__decorate([
    (0, common_1.Get)('order-types'),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getOrderTypeAnalytics", null);
__decorate([
    (0, common_1.Get)('hourly-revenue'),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getHourlyRevenue", null);
__decorate([
    (0, common_1.Get)('customers/ltv'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getTopCustomersLtv", null);
__decorate([
    (0, common_1.Get)('customers/new-vs-returning'),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getNewVsReturningCustomers", null);
exports.ReportController = ReportController = __decorate([
    (0, common_1.Controller)('api/reports'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'MANAGER'),
    __metadata("design:paramtypes", [report_service_1.ReportService])
], ReportController);
//# sourceMappingURL=report.controller.js.map