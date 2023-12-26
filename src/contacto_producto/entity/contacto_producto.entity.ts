import { Contacto } from 'src/contacto/entity/contacto.entity';
import { Producto } from 'src/productos/entity/producto.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('contacto_producto')
export class ContactoProducto {
  @PrimaryColumn({ name: 'producto_id' })
  producto_id: number;

  @PrimaryColumn({ name: 'contacto_id' })
  contacto_id: number;

  @Column({ name: 'estrellas' })
  estrellas: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'producto_id' })
  producto: Producto;

  @ManyToOne(() => Contacto)
  @JoinColumn({ name: 'contacto_id' })
  contacto: Contacto;
}
