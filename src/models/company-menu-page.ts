import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CompanyMenuPage', { synchronize: false })
export class Companymenupage extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'menu_id' })
  menuId: number;

  @Column({ name: 'page_id' })
  pageId: number;

  @Column({ name: 'company_id' })
  companyId: number;

  @Column({ name: 'order' })
  order: number;
}
