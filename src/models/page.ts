import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Page', { synchronize: false })
export class Page extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'schema' })
  schema: string;

  @Column({ name: 'file' })
  file: string;

  @Column({ name: 'page_type_id' })
  pageTypeId: number;

  @Column({ name: 'company_id' })
  companyId: number;
}
