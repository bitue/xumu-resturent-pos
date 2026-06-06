export declare class CreateCategoryDto {
    nameNl: string;
    nameEn: string;
    icon?: string;
    sortOrder?: number;
}
export declare class CreateMenuItemDto {
    categoryId: number;
    nameNl: string;
    nameEn: string;
    descriptionNl?: string;
    descriptionEn?: string;
    price: number;
    imageUrl?: string;
    prepTimeMinutes?: number;
    calories?: number;
    featured?: boolean;
    available?: boolean;
    allergenIds?: number[];
}
