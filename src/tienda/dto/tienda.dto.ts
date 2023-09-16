import { UsuarioDto } from '../../usuario/dto/usuario.dto';

export class ProductoDto {
  readonly nombre: string;
  readonly estrellas: number;
  readonly precio_compra: number;
  readonly precio_venta: number;
}

export class PromocionDto {
  readonly codigo:string
  readonly descuento:string
  readonly fecha_inicio:string
  readonly fecha_de_termino:string
}

export class MerchandisingDto {
  readonly Nombre: string
  readonly Precio: string
  readonly Tipo: string
  readonly Promoción: PromocionDto
}

export class Suscripción {
  readonly usuario:UsuarioDto
  readonly tipo:string
  readonly fecha_inicio:string
  readonly fecha_termino:string
  readonly merchandising:MerchandisingDto
}
