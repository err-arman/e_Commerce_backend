import { Injectable } from '@nestjs/common';
import { CreateUserAccountDto } from './dto/create-user-account.dto';
import { UpdateUserAccountDto } from './dto/update-user-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccount } from './entities/user-account.entity';
import { Repository } from 'typeorm';
import { VendorsService } from 'src/vendors/vendors.service';

@Injectable()
export class UserAccountsService {
  constructor(
    @InjectRepository(UserAccount)
    private readonly createAccount: Repository<UserAccount>,

    private readonly vendorService: VendorsService,
  ) {}

  async create(createUserAccountDto: CreateUserAccountDto) {
    try {
      const {
        name,
        email,
        password,
        address,
        date_of_birth,
        gender,
        phone,
        role,
        forgot_pass_id,
      } = createUserAccountDto;

      const exitsAccount = await this.createAccount.find({
        where: {
          email: email.toLocaleLowerCase(),
          role,
        },
      });

      if (exitsAccount?.length) {
        return {
          success: false,
          message: 'User already exists with this email',
          data: null,
        };
      }

      const isoDate = new Date(date_of_birth).toISOString().split('T')[0];

      const vendor = await this.vendorService.create({
        name,
        address,
        date_of_birth: isoDate,
        forgot_pass_id,
        gender,
        phone,
      });

      const account = await this.createAccount.save({
        email: email.toLocaleLowerCase(),
        password: password,
        role: role,
        vendor: vendor,
      });

      return account;
    } catch (err) {
      return err;
    }
  }

  findAll() {
    return `This action returns all userAccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAccount`;
  }

  update(id: number, updateUserAccountDto: UpdateUserAccountDto) {
    return `This action updates a #${id} userAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAccount`;
  }
}
