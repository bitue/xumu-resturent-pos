import { PrismaService } from '../common/prisma/prisma.service';
import { CreateCategoryDto, CreateMenuItemDto } from './dto/menu.dto';
export declare class MenuService {
    private prisma;
    constructor(prisma: PrismaService);
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
    createCategory(dto: CreateCategoryDto, username: string): Promise<{
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
    getMenuItem(id: number): Promise<{
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
    createMenuItem(dto: CreateMenuItemDto, username: string): Promise<{
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
    private mapCategory;
    private mapMenuItem;
}
