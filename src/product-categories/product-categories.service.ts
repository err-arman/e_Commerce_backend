import { Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ProductCategories,
  ProductCategory,
} from './entities/product-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCategoriesService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}

  async create(createProductCategoryDto: CreateProductCategoryDto) {
    try {
      const productCategory = await this.productCategoryRepository.save({
        ...createProductCategoryDto,
      });
      console.log('product category', productCategory);
      return productCategory;
    } catch (err) {
      console.log('product category save error', err);
      return err;
    }
  }

  findAll() {
    return `This action returns all productCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productCategory`;
  }

  update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    return `This action updates a #${id} productCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCategory`;
  }
}
