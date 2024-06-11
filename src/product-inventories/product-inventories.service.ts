import { Injectable } from '@nestjs/common';
import { CreateProductInventoryDto } from './dto/create-product-inventory.dto';
import { UpdateProductInventoryDto } from './dto/update-product-inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductInventory } from './entities/product-inventory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductInventoriesService {
  constructor(
    @InjectRepository(ProductInventory)
    private readonly productInventory: Repository<ProductInventory>,
  ) {}

  async create(createProductInventoryDto: CreateProductInventoryDto) {
    const productInventory = await this.productInventory.save({
      ...createProductInventoryDto,
    });

    return productInventory;
  }

  findAll() {
    return `This action returns all productInventories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productInventory`;
  }

  update(id: number, updateProductInventoryDto: UpdateProductInventoryDto) {
    return `This action updates a #${id} productInventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productInventory`;
  }
}
