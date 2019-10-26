import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Admin', { synchronize: false })
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'admin_role' })
  adminRole: string;

  @Column({ name: 'realm' })
  realm: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'emailVerified' })
  emailVerified: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'verificationToken' })
  verificationToken: string;
}
