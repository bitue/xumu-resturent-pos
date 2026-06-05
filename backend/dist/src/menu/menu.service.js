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
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
let MenuService = class MenuService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCategories() {
        const categories = await this.prisma.categories.findMany({
            where: { active: true },
            orderBy: { sort_order: 'asc' },
        });
        return { success: true, data: categories.map(c => this.mapCategory(c)) };
    }
    async createCategory(dto, username) {
        const category = await this.prisma.categories.create({
            data: {
                name: dto.name,
                icon: dto.icon,
                sort_order: dto.sortOrder || 0,
                created_by: username,
            },
        });
        return { success: true, data: this.mapCategory(category) };
    }
    async getMenuItems() {
        const items = await this.prisma.menu_items.findMany({
            where: { deleted_at: null },
            include: {
                menu_item_allergens: {
                    include: { allergens: true },
                },
            },
        });
        return { success: true, data: items.map(i => this.mapMenuItem(i)) };
    }
    async getMenuItem(id) {
        const item = await this.prisma.menu_items.findUnique({
            where: { id: id, deleted_at: null },
            include: {
                menu_item_allergens: {
                    include: { allergens: true },
                },
            },
        });
        if (!item)
            throw new common_1.NotFoundException('Menu item not found');
        return { success: true, data: this.mapMenuItem(item) };
    }
    async createMenuItem(dto, username) {
        const item = await this.prisma.menu_items.create({
            data: {
                category_id: dto.categoryId,
                name: dto.name,
                description: dto.description,
                price: dto.price,
                image_url: dto.imageUrl,
                prep_time_minutes: dto.prepTimeMinutes ?? 15,
                calories: dto.calories,
                featured: dto.featured ?? false,
                available: dto.available ?? true,
                created_by: username,
                menu_item_allergens: dto.allergenIds?.length ? {
                    create: dto.allergenIds.map(aId => ({ allergen_id: aId })),
                } : undefined,
            },
            include: {
                menu_item_allergens: { include: { allergens: true } },
            },
        });
        return { success: true, data: this.mapMenuItem(item) };
    }
    mapCategory(c) {
        return {
            id: Number(c.id),
            name: c.name,
            icon: c.icon,
            sortOrder: c.sort_order,
            active: c.active,
        };
    }
    mapMenuItem(i) {
        return {
            id: Number(i.id),
            categoryId: Number(i.category_id),
            name: i.name,
            description: i.description,
            price: Number(i.price),
            imageUrl: i.image_url,
            available: i.available,
            featured: i.featured,
            prepTimeMinutes: i.prep_time_minutes,
            calories: i.calories,
            allergens: i.menu_item_allergens?.map((ma) => ma.allergens.name) || [],
        };
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MenuService);
//# sourceMappingURL=menu.service.js.map