import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PageNotification', { synchronize: false })
export class Pagenotification extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'req_type' })
  reqType: string;

  @Column({ name: 'notif_type' })
  notifType: string;

  @Column({ name: 'page_id' })
  pageId: number;

  @Column({ name: 'company_code' })
  companyCode: string;
}
