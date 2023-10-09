import { Injectable } from '@nestjs/common';
import { PackDto } from './dto/pack.dto';
import { CreateProductosDto } from 'src/productos/dto/productos-create.dto';  

@Injectable()
export class PacksService {

  private readonly packs: PackDto[] = [
    {
      "nombre": "Pack Ejemplo",
      "estrellas": 4.5,
      "precio": 199.99,
      "imagen_url": "https://ejemplo.com/imagen.jpg",
      "casa_cervecera": "Cervecería Ejemplo",
      "productos": [
        {
          "casa_cervecera": "Cervecería Ejemplo 1",
          "tipo_de_cerveza": "Lager",
          "grado_alcoholico": 5,
          "amargor_ibu": "Moderado",
          "nombre": "Cerveza Ejemplo 1",
          "estrellas": 4,
          "precio_compra": 1000,
          "precio_venta": 1500
        },
        {
          "casa_cervecera": "Cervecería Ejemplo 2",
          "tipo_de_cerveza": "Ale",
          "grado_alcoholico": 6,
          "amargor_ibu": "Alto",
          "nombre": "Cerveza Ejemplo 2",
          "estrellas": 5,
          "precio_compra": 1200,
          "precio_venta": 1800
        }
      ]
    }
  ];

  findAllPacks() {
    return this.packs;
  }
}
