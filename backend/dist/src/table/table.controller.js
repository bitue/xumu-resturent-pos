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
exports.TableController = void 0;
const common_1 = require("@nestjs/common");
const table_service_1 = require("./table.service");
const table_dto_1 = require("./dto/table.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let TableController = class TableController {
    tableService;
    constructor(tableService) {
        this.tableService = tableService;
    }
    getAllTables() {
        return this.tableService.getAllTables();
    }
    getTable(id) {
        return this.tableService.getTable(+id);
    }
    createTable(dto, req) {
        const user = req.user;
        return this.tableService.createTable(dto, user.email);
    }
    updateTableStatus(id, status, req) {
        const user = req.user;
        return this.tableService.updateTableStatus(+id, status, user.email);
    }
    getAllReservations() {
        return this.tableService.getAllReservations();
    }
    createReservation(dto, req) {
        const user = req.user;
        return this.tableService.createReservation(dto, user.email);
    }
    updateReservationStatus(id, status, req) {
        const user = req.user;
        return this.tableService.updateReservationStatus(+id, status, user.email);
    }
};
exports.TableController = TableController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TableController.prototype, "getAllTables", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "getTable", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'MANAGER'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_dto_1.CreateTableDto, Object]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "createTable", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "updateTableStatus", null);
__decorate([
    (0, common_1.Get)('reservations/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TableController.prototype, "getAllReservations", null);
__decorate([
    (0, common_1.Post)('reservations'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_dto_1.ReservationDto, Object]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "createReservation", null);
__decorate([
    (0, common_1.Put)('reservations/:id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "updateReservationStatus", null);
exports.TableController = TableController = __decorate([
    (0, common_1.Controller)('api/tables'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [table_service_1.TableService])
], TableController);
//# sourceMappingURL=table.controller.js.map