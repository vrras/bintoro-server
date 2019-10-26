import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Menu', { synchronize: false })
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'logo' })
  logo: string;

  @Column({ name: 'menu_category_id' })
  menuCategoryId: number;

  @Column({ name: 'company_id' })
  companyId: number;
}
