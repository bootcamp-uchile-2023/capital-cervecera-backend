import { Casa_cervecera } from 'src/casacervecera/entity/casacervecera.entity';
import { Pack } from 'src/pack/entity/pack.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'tipo' })
  tipo: string;

  @Column({ name: 'grado_alcoholico' })
  grado_alcoholico: string;

  @Column({ name: 'amargor_ibu' })
  amargor_ibu: string;

  @Column({ name: 'nombre_producto' })
  nombre_producto: string;

  @Column({ name: 'precio_venta' })
  precio_venta: number;

  @Column({ name: 'precio_compra' })
  precio_compra: number;

  @Column({ name: 'is_recomendado' })
  is_recomendado: boolean;

  @Column({ name: 'casa_cervecera_id' })
  casa_cervecera_id: number;

  @Column({ name: 'url_imagen' })
  url_imagen: string;

  @ManyToOne(() => Casa_cervecera)
  @JoinColumn({ name: 'casa_cervecera_id' })
  casa_cervecera: Casa_cervecera;

  @ManyToMany(() => Pack)
  @JoinTable({
    name: 'producto_pack',
    joinColumn: { name: 'producto_id' },
    inverseJoinColumn: { name: 'pack_id' },
  })
  packs: Pack[];
}
