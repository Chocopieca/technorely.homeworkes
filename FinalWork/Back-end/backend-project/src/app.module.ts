import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/modules/user.entity'
import { CompanyEntity } from './company/modules/company.entity'
import { CompanyModule } from './company/company.module';

const enviroment = process.env.NODE_ENV || 'dev'

@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: `.env.${enviroment}`,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
    type: "postgres",
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: 5432,
    entities: [UserEntity, CompanyEntity],
    autoLoadEntities: true,
    synchronize: true
}), UserModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
