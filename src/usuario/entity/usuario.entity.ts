import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'password' })
  password: string;
}
