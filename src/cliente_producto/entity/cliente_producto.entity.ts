import { Cliente } from 'src/cliente/entity/cliente.entity';
import { Producto } from 'src/productos/entity/producto.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('cliente_producto')
export class ClienteProducto {
  @PrimaryColumn({ name: 'producto_id' })
  producto_id: number;

  @PrimaryColumn({ name: 'cliente_id' })
  cliente_id: number;

  @Column({ name: 'estrellas' })
  estrellas: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'producto_id' })
  producto: Producto;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;
}
