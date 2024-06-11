import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductInventoryDto {
  @IsNumber()
  @IsNotEmpty()
  quentity: number;
}
