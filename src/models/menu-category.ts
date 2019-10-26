import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity('MenuCategory', { synchronize: false })
export class Menucategory extends BaseEntity {
  @PrimaryColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'status' })
  status: number;

  @Column({ name: 'inherit' })
  inherit: number;
}
