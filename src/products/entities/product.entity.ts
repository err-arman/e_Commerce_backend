import { Discount } from 'src/discount/entities/discount.entity';
import { ProductCategory } from 'src/product-categories/entities/product-category.entity';
import { ProductInventory } from 'src/product-inventories/entities/product-inventory.entity';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
  OneToOne,
} from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column()
  product_name: string;

  @Column()
  product_description: string;

  @Column()
  price: number;

  @Column()
  upcoming: boolean;

  @OneToOne(
    () => ProductCategory,
    (productcategory) => productcategory.product,
    { cascade: true },
  )
  category: ProductCategory;

  @OneToOne(
    () => ProductInventory,
    (productInventory) => productInventory.product,
    { cascade: true },
  )
  product_inventory: ProductInventory;

  @OneToOne(() => Discount, (discount) => discount.product, {
    cascade: true,
  })
  product_discount: Discount;
}
