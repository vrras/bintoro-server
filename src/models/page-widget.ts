import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PageWidget', { synchronize: false })
export class Pagewidget extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'page_type_id' })
  pageTypeId: number;

  @Column({ name: 'widget_id' })
  widgetId: number;
}
