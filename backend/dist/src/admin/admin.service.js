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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUsers() {
        const users = await this.prisma.users.findMany({
            include: {
                user_roles: {
                    include: { roles: true },
                },
            },
            orderBy: { created_at: 'asc' },
        });
        return {
            success: true,
            data: users.map(u => ({
                id: Number(u.id),
                email: u.email,
                fullName: u.full_name,
                phone: u.phone,
                enabled: u.enabled,
                provider: u.provider,
                roles: u.user_roles.map(ur => ur.roles.name),
                createdAt: u.created_at,
            })),
        };
    }
    async updateUserRoles(userId, roles) {
        const roleRecords = await this.prisma.roles.findMany({
            where: { name: { in: roles } },
        });
        await this.prisma.$transaction(async (tx) => {
            await tx.user_roles.deleteMany({ where: { user_id: userId } });
            await tx.user_roles.createMany({
                data: roleRecords.map(r => ({ user_id: BigInt(userId), role_id: r.id })),
            });
        });
        return { success: true, message: 'Roles updated' };
    }
    async updateUserStatus(userId, enabled) {
        await this.prisma.users.update({
            where: { id: userId },
            data: { enabled },
        });
        return { success: true, message: `User ${enabled ? 'activated' : 'deactivated'}` };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map