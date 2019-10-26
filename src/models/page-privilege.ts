import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PagePrivilege', { synchronize: false })
export class Pageprivilege extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'page_id' })
  pageId: number;

  @Column({ name: 'user_type_id' })
  userTypeId: number;
}
