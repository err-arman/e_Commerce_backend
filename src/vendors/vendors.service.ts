import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(Vendor)
    private readonly vendorRepository?: Repository<Vendor>,
  ) {}

  async create(createVendorDto: CreateVendorDto) {
    if (!createVendorDto?.name) return;
    try {
      const vendorDetail = await this.vendorRepository.save({
        ...createVendorDto,
      });


      return vendorDetail;
    } catch (err) {
      console.log('vendor service error', err);
      return err;
    }
  }

  findAll() {
    return `This action returns all vendors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendor`;
  }

  update(id: number, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
