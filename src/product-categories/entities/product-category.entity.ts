import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ProductCategories {
  MOBILE = 'mobile',
  AC = 'ac',
  TV = 'tv',
  NEW = 'new',
}

@Entity('product-category')
export class ProductCategory {
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
  name: string;

  @Column()
  description: string;

  @OneToOne(() => Product, (product) => product.category)
  @JoinColumn({ name: 'category'})
  product: Product
}
