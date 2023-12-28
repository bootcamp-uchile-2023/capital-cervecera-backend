import { promises as FS } from 'fs';
import { ContactoProducto } from 'src/contacto_producto/entity/contacto_producto.entity';
import { CreateProductoDto } from '../dto/producto-create.dto';
import { ProductoDto } from '../dto/producto.dto';
import { Producto } from '../entity/producto.entity';
export class ProductoMapper {
  static toDto(entidad: Producto): ProductoDto {
    const dto = new ProductoDto();
    const estrellas = this.calcEstrellas(entidad.contacto_productos);
    dto.id = entidad.id;
    dto.nombre_producto = entidad.nombre_producto;
    dto.tipo = entidad.tipo;
    dto.volumen_cc = entidad.volumen_cc;
    dto.estrellas = +estrellas;
    dto.precio_descuento = entidad.precio_descuento;
    dto.precio_venta = entidad.precio_venta;
    dto.base64_imagen_card = entidad.base64_imagen_card;
    dto.base64_imagen_detalle = entidad.base64_imagen_detalle;
    dto.grado_alcoholico = entidad.grado_alcoholico;
    dto.amargor_ibu = entidad.amargor_ibu;
    dto.detalle = entidad.detalle;

    return dto;
  }

  static toDtoList(entidades: Producto[]): ProductoDto[] {
    return entidades.map((entidad) => this.toDtoforList(entidad));
  }

  static async toEntity(dto: CreateProductoDto): Promise<any> {
    const entidad = new Producto();
    if (dto.image_card_base64) {
      const base64Data = dto.image_card_base64.split(',')[1];
      const buffer = Buffer.from(base64Data, 'base64');
      const newName = dto.nombre_producto.toLowerCase().replace(' ', '_');
      const path = `imagenes/productos/cards/${newName}-card.jpg`;
      await FS.writeFile('assets/' + path, buffer);

      entidad.base64_imagen_card = path;
    }

    if (dto.image_detalle_base64) {
      const base64Data = dto.image_detalle_base64.split(',')[1];
      const buffer = Buffer.from(base64Data, 'base64');
      const newName = dto.nombre_producto.toLowerCase().replace(' ', '_'); // para que esten en minuscula y sean siempre con _ como me pidio el front xd
      const path = `imagenes/productos/detalles/${newName}-detalles.jpg`;
      await FS.writeFile('assets/' + path, buffer);

      entidad.base64_imagen_detalle = path;
    }

    entidad.nombre_producto = dto.nombre_producto;
    entidad.casa_cervecera_id = dto.casa_cervecera_id;
    entidad.tipo = dto.tipo;
    entidad.grado_alcoholico = dto.grado_alcoholico;
    entidad.amargor_ibu = dto.amargor_ibu;
    entidad.is_recomendado = dto.is_recomendado;

    entidad.precio_venta = dto.precio_venta;

    entidad.volumen_cc = dto.volumen_cc;
    entidad.stock = dto.stock;
    entidad.is_promo = dto.is_promo;
    entidad.detalle = dto.detalle;
    entidad.sku = dto.sku;
    entidad.precio_descuento = dto.precio_descuento;

    return entidad;
  }

  static calcEstrellas(contacto_productos: ContactoProducto[]) {
    if (!contacto_productos) {
      return 0;
    }
    const suma = contacto_productos.reduce((sum, cp) => {
      return sum + cp.estrellas;
    }, 0);
    return (suma / contacto_productos.length).toFixed(2);
  }

  static toDtoforList(entidad: Producto): ProductoDto {
    const dto = new ProductoDto();
    const estrellas = this.calcEstrellas(entidad.contacto_productos);

    dto.sku = entidad.sku;

    dto.id = entidad.id;
    dto.nombre_producto = entidad.nombre_producto;
    dto.precio_venta = entidad.precio_venta;
    dto.precio_descuento = entidad.precio_descuento;
    dto.estrellas = +estrellas;
    dto.stock = entidad.stock;
    dto.volumen_cc = entidad.volumen_cc;
    dto.base64_imagen_card = entidad.base64_imagen_card;
    dto.is_recomendado = entidad.is_recomendado;
    dto.is_promo = entidad.is_promo;

    return dto;
  }
}
