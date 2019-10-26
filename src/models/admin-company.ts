import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('AdminCompany', { synchronize: false })
export class Admincompany extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'admin_id' })
  adminId: number;

  @Column({ name: 'company_id' })
  companyId: number;
}
