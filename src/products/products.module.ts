import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductCategoriesService } from 'src/product-categories/product-categories.service';
import {
  ProductCategories,
  ProductCategory,
} from 'src/product-categories/entities/product-category.entity';
import { ProductInventoriesService } from 'src/product-inventories/product-inventories.service';
import { ProductInventory } from 'src/product-inventories/entities/product-inventory.entity';
import { DiscountService } from 'src/discount/discount.service';
import { Discount } from 'src/discount/entities/discount.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductCategory,
      ProductInventory,
      Discount 
      // ProductCategoriesModule,
      // ProductInventoriesModule,
    ]),
  ],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductCategoriesService,
    ProductInventoriesService,
    DiscountService,
  ],
})
export class ProductsModule {}
