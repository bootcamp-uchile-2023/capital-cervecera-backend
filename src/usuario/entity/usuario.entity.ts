import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contacto } from '../../contacto/entity/contacto.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'isAdmin' })
  isAdmin: boolean;

  @OneToOne(() => Contacto, (c) => c.usuario)
  contacto: Contacto;
}
