import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ACL', { synchronize: false })
export class Acl extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'model' })
  model: string;

  @Column({ name: 'property' })
  property: string;

  @Column({ name: 'accessType' })
  accessType: string;

  @Column({ name: 'permission' })
  permission: string;

  @Column({ name: 'principalType' })
  principalType: string;

  @Column({ name: 'principalId' })
  principalId: string;
}
