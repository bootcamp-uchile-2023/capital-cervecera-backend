import { ApiProperty } from '@nestjs/swagger';

export class CreateProductosDto {
  @ApiProperty()
  readonly nombre: string;
  @ApiProperty()
  readonly estrellas: number;
  @ApiProperty()
  readonly precio_compra: number;
  @ApiProperty()
  readonly precio_venta: number;
}
::{usuario_id}/carrito/relacionados
[
  {
    "id_producto": "001",
    "nombre": "Cerveza Artesanal IPA",
    "descripcion": "Una cerveza lupulada y refrescante.",
    "precio": 5.99,
    "imagen_url": "http://ejemplo.com/cerveza1.jpg"
  },
  {
    "id_producto": "002",
    "nombre": "Cerveza Lager Premium",
    "descripcion": "Una cerveza suave y ligera.",
    "precio": 4.99,
    "imagen_url": "http://ejemplo.com/cerveza2.jpg"
  },
  {
    "id_producto": "003",
    "nombre": "Cerveza Stout Robusta",
    "descripcion": "Una cerveza oscura y robusta.",
    "precio": 6.99,
    "imagen_url": "http://ejemplo.com/cerveza3.jpg"
  }
]
