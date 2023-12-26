import { Comuna } from 'src/comuna/entity/comuna.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('direccion')
export class Direccion {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'direccion' })
  direccion: string;

  @Column({ name: 'depto_casa' })
  depto_casa: string;

  @Column({ name: 'comuna_id' })
  comuna_id: number;

  @ManyToOne(() => Comuna)
  @JoinColumn({ name: 'comuna_id' })
  comuna: Comuna;
}
