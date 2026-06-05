"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../common/prisma/prisma.service");
const bcrypt = __importStar(require("bcryptjs"));
const crypto_1 = require("crypto");
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const user = await this.prisma.users.findUnique({
            where: { email: loginDto.email },
            include: {
                user_roles: {
                    include: { roles: true },
                },
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        if (!user || !user.password_hash) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.enabled) {
            throw new common_1.ForbiddenException('User account is disabled');
        }
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password_hash);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const roles = user.user_roles.map(ur => ur.roles.name);
        const payload = { sub: Number(user.id), email: user.email, roles };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
        const familyId = (0, crypto_1.randomUUID)();
        const refreshTokenPayload = { sub: Number(user.id), family_id: familyId };
        const refreshToken = this.jwtService.sign(refreshTokenPayload, { expiresIn: '7d' });
        await this.prisma.refresh_tokens.create({
            data: {
                token_hash: await bcrypt.hash(refreshToken, 10),
                user_id: user.id,
                family_id: familyId,
                expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
        });
        return {
            success: true,
            data: {
                accessToken,
                refreshToken,
                user: {
                    id: Number(user.id),
                    email: user.email,
                    fullName: user.full_name,
                    roles,
                },
            },
        };
    }
    async getMe(userId) {
        const user = await this.prisma.users.findUnique({
            where: { id: userId },
            include: {
                user_roles: {
                    include: { roles: { include: { role_permissions: { include: { permissions: true } } } } },
                },
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const roles = user.user_roles.map(ur => ur.roles.name);
        const permissions = Array.from(new Set(user.user_roles.flatMap(ur => ur.roles.role_permissions.map(rp => rp.permissions.name))));
        return {
            success: true,
            data: {
                id: Number(user.id),
                email: user.email,
                fullName: user.full_name,
                roles,
                permissions,
            },
        };
    }
    async refresh(token) {
        try {
            const decoded = this.jwtService.verify(token);
            const userId = decoded.sub;
            const user = await this.prisma.users.findUnique({
                where: { id: userId },
                include: { user_roles: { include: { roles: true } } },
            });
            if (!user || !user.enabled) {
                throw new common_1.UnauthorizedException('Invalid refresh token');
            }
            const roles = user.user_roles.map(ur => ur.roles.name);
            const payload = { sub: Number(user.id), email: user.email, roles };
            const newAccessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
            return {
                success: true,
                data: {
                    accessToken: newAccessToken,
                },
            };
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map