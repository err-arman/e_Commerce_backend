import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { CreateDateColumn } from 'typeorm';
import { USER_ROLES } from '../entities/user-account.entity';

export class CreateUserAccountDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsEnum(USER_ROLES)
  role: USER_ROLES;

  @IsOptional()
  phone: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  gender: string;

  @IsOptional()
  // @CreateDateColumn({ type: 'date' })
  date_of_birth: string;

  @IsOptional()
  @IsString()
  forgot_pass_id: string;
}
