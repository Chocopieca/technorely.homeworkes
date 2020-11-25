import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';

import { CompanyEntity } from '../modules/company.entity';

@Injectable()
export class CompanyService {
    
    constructor(
        @InjectRepository(CompanyEntity)
        private companyRepository: Repository<CompanyEntity>,
    ) {}

    findAll(): Observable<CompanyEntity[]> {
        return from(this.companyRepository.find());
    }
}
