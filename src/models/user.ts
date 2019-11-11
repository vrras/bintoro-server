import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { synchronize: false })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'email' })
  email: string;
  
  @Column({ name: 'email_verified' })
  emailVerified: number;

  @Column({ name: 'telepon' })
  telepon: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
