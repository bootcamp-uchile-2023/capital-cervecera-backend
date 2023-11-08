import { Injectable } from '@nestjs/common';
import { SuscripcionDto } from './dto/suscripciones.dto';

@Injectable()
export class SuscripcionesService {

  private readonly suscripciones: SuscripcionDto[] = [
    {
      "nombre": "Pack Ejemplo",
      "estrellas": 4.5,
      "precio": 199.99,
      "imagen_url": "https://ejemplo.com/imagen.jpg",
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

  findAllSuscripciones() {
    return this.suscripciones;
  }
}
