import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { assignIn} from 'lodash'

import { UserEntity } from '../modules/user.entity';
import { CreateUserDto } from '../modules/dto/add_user.dto'

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) {}

    async creatUser(CreateUserDto: CreateUserDto) : Promise<UserEntity> {
        const round = 10;
        const salt = await bcrypt.genSalt(round);
        const hash = await bcrypt.hash(CreateUserDto.password, salt)

        const hashUser = assignIn(CreateUserDto, { password: hash });
        return await this.userRepository.save(hashUser)
    }

    findAll(): Observable<UserEntity[]> {
        return from(this.userRepository.find());
    }
}
