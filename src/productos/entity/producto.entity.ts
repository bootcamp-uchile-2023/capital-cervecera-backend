import { Casa_cervecera } from 'src/casacervecera/entity/casacervecera.entity';
import { ClienteProducto } from 'src/cliente_producto/entity/cliente_producto.entity';
import { Pack } from 'src/pack/entity/pack.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'sku' })
  sku: string;

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

  @Column({ name: 'is_recomendado' })
  is_recomendado: boolean;

  @Column({ name: 'casa_cervecera_id' })
  casa_cervecera_id: number;

  @Column({ name: 'url_imagen_detalle' })
  url_imagen_detalle: string;

  @Column({ name: 'url_imagen_card' })
  url_imagen_card: string;

  @Column({ name: 'is_promo' })
  is_promo: boolean;

  @Column({ name: 'volumen_cc' })
  volumen_cc: number;

  @Column({ name: 'detalle' })
  detalle: string;

  @Column({ name: 'stock' })
  stock: number;

  @Column({ name: 'precio_descuento' })
  precio_descuento: number;

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

  @OneToMany(() => ClienteProducto, (u) => u.producto)
  cliente_productos: ClienteProducto[];
}
