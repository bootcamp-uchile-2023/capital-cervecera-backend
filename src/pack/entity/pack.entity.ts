import { Producto } from 'src/productos/entity/producto.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pack')
export class Pack {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'precio_venta' })
  precio_venta: number;

  @ManyToMany(() => Producto, (p) => p.packs)
  productos: Producto[];
}
