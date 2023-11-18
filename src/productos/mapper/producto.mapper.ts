import { CreateProductoDto } from '../dto/producto-create.dto';
import { ProductoDto } from '../dto/producto.dto';
import { Producto } from '../entity/producto.entity';
//import { CreateProductosDto } from '../dto/productos-create.dto';

export class ProductoMapper {
  static toDto(entidad: Producto): ProductoDto {
    const dto = new ProductoDto();
    dto.id = entidad.id;
    dto.nombre_producto = entidad.nombre_producto;
    dto.tipo = entidad.tipo;
    dto.precio_venta = entidad.precio_venta;
    dto.grado_alcoholico = entidad.grado_alcoholico;
    dto.amargor_ibu = entidad.amargor_ibu;
    dto.casa_cervecera = entidad.casa_cervecera.nombre;
    dto.packs = entidad.packs;
    dto.url_imagen = entidad.url_imagen;
    dto.is_recomendado = entidad.is_recomendado;

    return dto;
  }

  static toDtoList(entidades: Producto[]): ProductoDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
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
    entidad.url_imagen = dto.url_imagen;
    return entidad;
  }
}
