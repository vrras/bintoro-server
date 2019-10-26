import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Widget', { synchronize: false })
export class Widget extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'widget' })
  widget: string;

  @Column({ name: 'position' })
  position: string;

  @Column({ name: 'label' })
  label: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'data' })
  data: string;
}
