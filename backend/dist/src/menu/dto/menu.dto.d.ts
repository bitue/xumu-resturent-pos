export declare class CreateCategoryDto {
    name: string;
    icon?: string;
    sortOrder?: number;
}
export declare class CreateMenuItemDto {
    categoryId: number;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    prepTimeMinutes?: number;
    calories?: number;
    featured?: boolean;
    available?: boolean;
    allergenIds?: number[];
}
