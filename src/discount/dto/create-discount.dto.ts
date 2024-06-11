import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDiscountDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  discount_percent: number;

  @IsBoolean()
  active: boolean;
}
