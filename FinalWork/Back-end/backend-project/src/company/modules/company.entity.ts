import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({readonly: false, unique: true})
  name: string;

  @Column({readonly: false})
  address: string;

  @Column({readonly: false})
  servicerOfActivity: string;

  @Column({readonly: false})
  numberOfEmployees: number;

  @Column({readonly: false, default: 'New company'})
  description: string;

  @Column({readonly: false})
  type: string;
}