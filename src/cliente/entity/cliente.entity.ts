import { ClienteProducto } from 'src/cliente_producto/entity/cliente_producto.entity';
import { Direccion } from 'src/direccion/entity/direccion.entity';
import { Usuario } from 'src/usuario/entity/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'usuario_id' })
  usuario_id: number;

  @Column({ name: 'direccion_id' })
  direccion_id: number;

  @Column({ name: 'rut' })
  rut: string;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'esta_atento' })
  esta_atento: boolean;

  @Column({ name: 'apellido_paterno' })
  apellido_paterno: string;

  @Column({ name: 'apellido_materno' })
  apellido_materno: string;

  @Column({ name: 'url_imagen' })
  url_imagen: string;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToOne(() => Direccion)
  @JoinColumn({ name: 'direccion_id' })
  direccion: Direccion;

  @OneToMany(() => ClienteProducto, (u) => u.cliente)
  cliente_productos: ClienteProducto[];
}
