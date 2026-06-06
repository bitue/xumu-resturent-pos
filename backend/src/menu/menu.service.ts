import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateCategoryDto, CreateMenuItemDto } from './dto/menu.dto';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async getCategories() {
    const categories = await this.prisma.categories.findMany({
      where: { active: true },
      orderBy: { sort_order: 'asc' },
    });
    return { success: true, data: categories.map(c => this.mapCategory(c)) };
  }

  async createCategory(dto: CreateCategoryDto, username: string) {
    const category = await this.prisma.categories.create({
      data: {
        name_nl: dto.nameNl,
        name_en: dto.nameEn,
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
        categories: true,
        menu_item_allergens: {
          include: { allergens: true },
        },
      },
    });
    return { success: true, data: items.map(i => this.mapMenuItem(i)) };
  }

  async getMenuItem(id: number) {
    const item = await this.prisma.menu_items.findUnique({
      where: { id: id, deleted_at: null },
      include: {
        menu_item_allergens: {
          include: { allergens: true },
        },
      },
    });
    if (!item) throw new NotFoundException('Menu item not found');
    return { success: true, data: this.mapMenuItem(item) };
  }

  async createMenuItem(dto: CreateMenuItemDto, username: string) {
    const item = await this.prisma.menu_items.create({
      data: {
        category_id: dto.categoryId,
        name_nl: dto.nameNl,
        name_en: dto.nameEn,
        description_nl: dto.descriptionNl,
        description_en: dto.descriptionEn,
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

  private mapCategory(c: any) {
    return {
      id: Number(c.id),
      nameNl: c.name_nl,
      nameEn: c.name_en,
      icon: c.icon,
      sortOrder: c.sort_order,
      active: c.active,
    };
  }

  private mapMenuItem(i: any) {
    return {
      id: Number(i.id),
      categoryId: Number(i.category_id),
      categoryName: i.categories?.name_nl ?? '', // Will just default to NL for categoryName in item for now, but we'll also map it properly or UI handles it
      categoryNameNl: i.categories?.name_nl ?? '',
      categoryNameEn: i.categories?.name_en ?? '',
      nameNl: i.name_nl,
      nameEn: i.name_en,
      descriptionNl: i.description_nl,
      descriptionEn: i.description_en,
      price: Number(i.price),
      priceEur: Number(i.price),
      imageUrl: i.image_url,
      available: i.available,
      featured: i.featured,
      prepTimeMinutes: i.prep_time_minutes,
      calories: i.calories,
      allergens: i.menu_item_allergens?.map((ma: any) => ma.allergens.name) || [],
    };
  }
}
