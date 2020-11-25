import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { RoleEnum, PostitonEnum } from './user.enum'


@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({readonly: false, unique: true})
  email: string;

  @Column({readonly: false})
  password: string;

  @Column({readonly: false, unique: true})
  phoneNumber: string;

  @Column({readonly: false})
  firstName: string;

  @Column({readonly: false})
  lastName: string;

  @Column({readonly: false, unique: true})
  nickname: string;

  @Column({readonly: false, default: 'New user'})
  description: string;

  @Column({
    type: 'enum',
    enum: PostitonEnum,
    default: PostitonEnum.GUEST,
    readonly: false,
    })
  position: PostitonEnum;

  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.USER,
    readonly: false
  })
  role: RoleEnum
}