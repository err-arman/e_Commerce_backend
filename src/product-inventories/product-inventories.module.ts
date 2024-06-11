import { Module } from '@nestjs/common';
import { ProductInventoriesService } from './product-inventories.service';
import { ProductInventoriesController } from './product-inventories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInventory } from './entities/product-inventory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInventory])],
  controllers: [ProductInventoriesController],
  providers: [ProductInventoriesService],
})
export class ProductInventoriesModule {}
