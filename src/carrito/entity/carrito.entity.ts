import {
  Column,
  CreateDateColumn,
  Entity,
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
}
