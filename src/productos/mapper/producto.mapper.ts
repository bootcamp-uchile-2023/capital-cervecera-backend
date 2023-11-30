import { ClienteProducto } from 'src/cliente_producto/entity/cliente_producto.entity';
import { CreateProductoDto } from '../dto/producto-create.dto';
import { ProductoDto } from '../dto/producto.dto';
import { Producto } from '../entity/producto.entity';

export class ProductoMapper {
  static toDto(entidad: Producto): ProductoDto {
    const dto = new ProductoDto();
    const estrellas = this.calcEstrellas(entidad.cliente_productos);
    dto.id = entidad.id;
    dto.nombre_producto = entidad.nombre_producto;
    dto.tipo = entidad.tipo;
    dto.volumen_cc = entidad.volumen_cc;
    dto.estrellas = +estrellas;
    dto.precio_descuento = entidad.precio_descuento;
    dto.precio_venta = entidad.precio_venta;
    dto.url_imagen_detalle = entidad.url_imagen_detalle;
    dto.grado_alcoholico = entidad.grado_alcoholico;
    dto.amargor_ibu = entidad.amargor_ibu;
    dto.detalle = entidad.detalle;

    return dto;
  }

  static toDtoList(entidades: Producto[]): ProductoDto[] {
    return entidades.map((entidad) => this.toDtoforList(entidad));
  }

  static toEntity(dto: CreateProductoDto): Producto {
    const entidad = new Producto();

    entidad.nombre_producto = dto.nombre_producto;
    entidad.casa_cervecera_id = dto.casa_cervecera_id;
    entidad.tipo = dto.tipo;
    entidad.grado_alcoholico = dto.grado_alcoholico;
    entidad.amargor_ibu = dto.amargor_ibu;
    entidad.is_recomendado = dto.is_recomendado;
    entidad.precio_compra = dto.precio_compra;
    entidad.precio_venta = dto.precio_venta;
    entidad.url_imagen_card = dto.url_imagen_card;
    entidad.url_imagen_detalle = dto.url_imagen_detalle;
    entidad.volumen_cc = dto.volumen_cc;
    entidad.stock = dto.stock;
    entidad.is_promo = dto.is_promo;
    entidad.detalle = dto.detalle;

    return entidad;
  }

  static calcEstrellas(cliente_productos: ClienteProducto[]) {
    const suma = cliente_productos.reduce((sum, cp) => {
      return sum + cp.estrellas;
    }, 0);
    return (suma / cliente_productos.length).toFixed(2);
  }

  static toDtoforList(entidad: Producto): ProductoDto {
    const dto = new ProductoDto();
    const estrellas = this.calcEstrellas(entidad.cliente_productos);

    dto.precio_venta = entidad.precio_venta;
    dto.precio_descuento = entidad.precio_descuento;
    dto.estrellas = +estrellas;
    dto.stock = entidad.stock;
    dto.volumen_cc = entidad.volumen_cc;
    dto.url_imagen_card = entidad.url_imagen_card;

    return dto;
  }
}
