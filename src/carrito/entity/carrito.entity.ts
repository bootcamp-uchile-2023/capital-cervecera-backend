import { Cliente } from 'src/cliente/entity/cliente.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('carrito')
export class Carrito {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'total' })
  total: number;

  @Column({ name: 'sub_total' })
  sub_total: number;

  @Column({ name: 'cliente_id' })
  cliente_id: number;

  @Column({ name: 'estado' })
  estado: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;
}
