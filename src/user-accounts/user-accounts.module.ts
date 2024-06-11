import { Module } from '@nestjs/common';
import { UserAccountsService } from './user-accounts.service';
import { UserAccountsController } from './user-accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccount } from './entities/user-account.entity';
import { VendorsService } from 'src/vendors/vendors.service';
import { Vendor } from 'src/vendors/entities/vendor.entity';
import { VendorsModule } from 'src/vendors/vendors.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserAccount, Vendor, VendorsModule])],
  controllers: [UserAccountsController],
  providers: [UserAccountsService, VendorsService],
})
export class UserAccountsModule {}
