import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('casa_cervecera')
export class Casa_cervecera {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nombre' })
  nombre: string;
}
