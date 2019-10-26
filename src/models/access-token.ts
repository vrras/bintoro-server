import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('AccessToken', { synchronize: false })
export class AccessToken extends BaseEntity {
  @PrimaryColumn({ name: 'id' })
  ID: string;

  @Column({ name: 'ttl' })
  ttl: number;

  @Column({ name: 'scopes' })
  scopes: string;

  @Column({ name: 'created' })
  created: Date;

  @Column({ name: 'userId' })
  userId: number;
}
