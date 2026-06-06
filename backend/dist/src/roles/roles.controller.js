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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const roles_service_1 = require("./roles.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const common_2 = require("@nestjs/common");
let RolesController = class RolesController {
    rolesService;
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    async findAll() {
        const roles = await this.rolesService.findAll();
        return {
            success: true,
            data: roles.map(r => ({
                id: r.id.toString(),
                name: r.name,
                description: r.description,
                permissions: r.role_permissions.map(rp => ({
                    id: rp.permissions.id.toString(),
                    name: rp.permissions.name,
                    description: rp.permissions.description,
                })),
            })),
        };
    }
    async findAllPermissions() {
        const permissions = await this.rolesService.findAllPermissions();
        return {
            success: true,
            data: permissions.map(p => ({
                id: p.id.toString(),
                name: p.name,
                description: p.description,
            })),
        };
    }
    async createRole(name, description) {
        const role = await this.rolesService.createRole(name, description);
        return {
            success: true,
            data: {
                id: role?.id.toString(),
                name: role?.name,
                description: role?.description,
                permissions: [],
            },
        };
    }
    async updateRolePermissions(id, permissionIds) {
        const roleId = BigInt(id);
        const pIds = permissionIds.map(pId => BigInt(pId));
        const role = await this.rolesService.updateRolePermissions(roleId, pIds);
        return {
            success: true,
            data: {
                id: role?.id.toString(),
                name: role?.name,
                description: role?.description,
            },
        };
    }
};
exports.RolesController = RolesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('permissions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findAllPermissions", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "createRole", null);
__decorate([
    (0, common_1.Put)(':id/permissions'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('permissionIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "updateRolePermissions", null);
exports.RolesController = RolesController = __decorate([
    (0, common_1.Controller)('api/roles'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('SUPER_ADMIN'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
//# sourceMappingURL=roles.controller.js.map