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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
let RolesService = class RolesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.roles.findMany({
            include: {
                role_permissions: {
                    include: {
                        permissions: true,
                    },
                },
            },
        });
    }
    async findAllPermissions() {
        return this.prisma.permissions.findMany();
    }
    async createRole(name, description) {
        const role = await this.prisma.roles.create({
            data: { name, description },
        });
        return this.prisma.roles.findUnique({
            where: { id: role.id },
            include: {
                role_permissions: {
                    include: {
                        permissions: true,
                    },
                },
            },
        });
    }
    async updateRolePermissions(roleId, permissionIds) {
        const role = await this.prisma.roles.findUnique({
            where: { id: roleId },
        });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.role_permissions.deleteMany({
                where: { role_id: roleId },
            });
            if (permissionIds.length > 0) {
                await tx.role_permissions.createMany({
                    data: permissionIds.map((permId) => ({
                        role_id: roleId,
                        permission_id: permId,
                    })),
                });
            }
        });
        return this.prisma.roles.findUnique({
            where: { id: roleId },
            include: {
                role_permissions: {
                    include: {
                        permissions: true,
                    },
                },
            },
        });
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RolesService);
//# sourceMappingURL=roles.service.js.map