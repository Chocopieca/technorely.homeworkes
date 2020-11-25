import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyController } from './controller/company.controller';
import { CompanyService } from './service/company.service';
import { CompanyEntity } from './modules/company.entity'

@Module({
  imports:[TypeOrmModule.forFeature([CompanyEntity])],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
