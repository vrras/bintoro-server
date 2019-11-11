import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('accesstoken', { synchronize: false })
export class AccessToken extends BaseEntity {
  @PrimaryColumn({ name: 'id' })
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'token' })
  token: string;

  @Column({ name: 'type' })
  type: string;

  @Column({ name: 'is_revoked' })
  isRevoked: number;
  
  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
