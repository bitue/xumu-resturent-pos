import { IsNotEmpty, IsNumber, IsOptional, IsString, IsBoolean, IsArray, Min } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsOptional()
  @IsNumber()
  sortOrder?: number;
}

export class CreateMenuItemDto {
  @IsNotEmpty({ message: 'Category ID is required' })
  @IsNumber()
  categoryId: number;

  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty({ message: 'Price is required' })
  @IsNumber()
  @Min(0, { message: 'Price must be positive' })
  price: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsNumber()
  prepTimeMinutes?: number;

  @IsOptional()
  @IsNumber()
  calories?: number;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  available?: boolean;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  allergenIds?: number[];
}
