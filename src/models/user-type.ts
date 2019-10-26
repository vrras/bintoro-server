import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserType', { synchronize: false })
export class Usertype extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'code' })
  code: number;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'company_id' })
  companyId: number;
}
