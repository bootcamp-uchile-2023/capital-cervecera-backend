import { Contacto } from 'src/contacto/entity/contacto.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Venta } from './venta.entity';

@Entity('carrito')
export class Carrito {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'contacto_id' })
  contacto_id: number;

  @Column({ name: 'estado' })
  estado: string;

  @Column({ name: 'venta_id' })
  venta_id: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @ManyToOne(() => Contacto)
  @JoinColumn({ name: 'contacto_id' })
  contacto: Contacto;

  @OneToOne(() => Venta)
  @JoinColumn({ name: 'venta_id' })
  venta: Venta;
}
