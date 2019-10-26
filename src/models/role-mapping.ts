import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('RoleMapping', { synchronize: false })
export class Rolemapping extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'principalType' })
  principalType: string;

  @Column({ name: 'principalId' })
  principalId: string;

  @Column({ name: 'roleId' })
  roleId: number;
}
