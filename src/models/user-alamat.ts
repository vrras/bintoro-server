import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('useralamat', { synchronize: false })
export class UserAlamat extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nama_alamat' })
  namaAlamat: string;

  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'latitude' })
  latitude: number;

  @Column({ name: 'longitude' })
  longitude: number;

  @Column({ name: 'detail_lokasi' })
  detailLokasi: string;

  @Column({ name: 'kabupaten' })
  kabupaten: string;

  @Column({ name: 'kecamatan' })
  kecamatan: string;

  @Column({ name: 'kelurahan' })
  kelurahan: string;

  @Column({ name: 'jenis_property' })
  jenisProperty: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
