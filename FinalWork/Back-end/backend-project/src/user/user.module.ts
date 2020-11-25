import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { UserEntity } from './modules/user.entity'

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
