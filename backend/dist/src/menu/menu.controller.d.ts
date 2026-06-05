import { MenuService } from './menu.service';
import { CreateCategoryDto, CreateMenuItemDto } from './dto/menu.dto';
import type { Request } from 'express';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    getCategories(): Promise<{
        success: boolean;
        data: {
            id: number;
            name: any;
            icon: any;
            sortOrder: any;
            active: any;
        }[];
    }>;
    createCategory(dto: CreateCategoryDto, req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            name: any;
            icon: any;
            sortOrder: any;
            active: any;
        };
    }>;
    getMenuItems(): Promise<{
        success: boolean;
        data: {
            id: number;
            categoryId: number;
            name: any;
            description: any;
            price: number;
            imageUrl: any;
            available: any;
            featured: any;
            prepTimeMinutes: any;
            calories: any;
            allergens: any;
        }[];
    }>;
    getMenuItem(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            categoryId: number;
            name: any;
            description: any;
            price: number;
            imageUrl: any;
            available: any;
            featured: any;
            prepTimeMinutes: any;
            calories: any;
            allergens: any;
        };
    }>;
    createMenuItem(dto: CreateMenuItemDto, req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            categoryId: number;
            name: any;
            description: any;
            price: number;
            imageUrl: any;
            available: any;
            featured: any;
            prepTimeMinutes: any;
            calories: any;
            allergens: any;
        };
    }>;
}
