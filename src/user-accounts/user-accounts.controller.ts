import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAccountsService } from './user-accounts.service';
import { CreateUserAccountDto } from './dto/create-user-account.dto';
import { UpdateUserAccountDto } from './dto/update-user-account.dto';

@Controller('user-accounts')
export class UserAccountsController {
  constructor(private readonly userAccountsService: UserAccountsService) {}

  @Post()
  create(@Body() createUserAccountDto: CreateUserAccountDto) {
    return this.userAccountsService.create(createUserAccountDto);
  }

  @Get()
  findAll() {
    return this.userAccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAccountsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAccountDto: UpdateUserAccountDto) {
    return this.userAccountsService.update(+id, updateUserAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAccountsService.remove(+id);
  }
}
