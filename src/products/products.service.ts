import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductCategoriesService } from 'src/product-categories/product-categories.service';
import { ProductInventoriesService } from 'src/product-inventories/product-inventories.service';
import { DiscountService } from 'src/discount/discount.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    private readonly productCategoryService: ProductCategoriesService,
    private readonly productInventoryService: ProductInventoriesService,
    private readonly discountService: DiscountService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try { 
      const productCategory = await this.productCategoryService.create({
        name: createProductDto.product_name,
        description: createProductDto.product_description,
      });

      const productInventory = await this.productInventoryService.create({
        quentity: createProductDto.product_quentity,
      });

      const discount = await this.discountService.create({
        active: createProductDto.discount_active,
        description: createProductDto.discount_des,
        name: createProductDto.discount_name,
        discount_percent: createProductDto.discount_percent,
      });

      const product = await this.productRepository.save({
        ...createProductDto,
        category: productCategory,
        inventory: productInventory,
        discount: discount,
      });

      // product.

      console.log('created product', product);
      return product;
    } catch (err) {
      console.log('created product error', err);
      return err;
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
