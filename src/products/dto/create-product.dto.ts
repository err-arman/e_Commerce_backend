import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsNumber,
  IsEmpty,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ProductCategories } from 'src/product-categories/entities/product-category.entity';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  product_name: string;

  @IsString()
  @IsOptional()
  product_description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(ProductCategories)
  product_category: ProductCategories;

  @IsString()
  @IsOptional()
  product_category_desc: string;

  @IsNumber()
  @IsNotEmpty()
  product_quentity: number;

  @IsBoolean()
  @IsOptional()
  upcoming: boolean;

  @IsBoolean()
  @IsNotEmpty()
  discount_active: boolean;

  @IsString()
  @IsOptional()
  discount_name: string;

  @IsNumber()
  @IsOptional()
  discount_percent: number;

  @IsString()
  @IsOptional()
  discount_des: string;
}
