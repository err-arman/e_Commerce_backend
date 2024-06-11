import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { VendorsModule } from './vendors/vendors.module';
import { UserAccountsModule } from './user-accounts/user-accounts.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { ProductInventoriesModule } from './product-inventories/product-inventories.module';
import { DiscountModule } from './discount/discount.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    ProductsModule,

    AuthModule,

    CustomersModule,

    VendorsModule,

    UserAccountsModule,

    ProductCategoriesModule,

    ProductInventoriesModule,

    DiscountModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
