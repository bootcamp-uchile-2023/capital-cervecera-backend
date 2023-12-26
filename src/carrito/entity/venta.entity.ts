import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('venta')
export class Venta {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'tipo' })
  tipo: string;

  @Column({ name: 'monto' })
  monto: number;

  @Column({ name: 'forma_pago' })
  forma_pago: string;

  @Column({ name: 'total' })
  total: number;
}
