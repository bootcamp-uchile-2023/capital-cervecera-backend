import { Injectable } from '@nestjs/common';
import { PromosInterface } from './interfaces/producto.promos.interface';



@Injectable()
export class PromosService {
  private promos:PromosInterface[] = [
    {
        "id": "1",
        "nombre": "Camiseta",
        "precio_venta": 25.99,
        "precio_descuento": 20.99,
        "estrellas": 4,
        "url_imagen": "https://ejemplo.com/camiseta.jpg"
    },
    {
        "id": "2",
        "nombre": "Pantalón",
        "precio_venta": 45.99,
        "precio_descuento": 35.99,
        "estrellas": 5,
        "url_imagen": "https://ejemplo.com/pantalon.jpg"
    },
    {
        "id": "3",
        "nombre": "Zapatos",
        "precio_venta": 89.99,
        "precio_descuento": 79.99,
        "estrellas": 4,
        "url_imagen": "https://ejemplo.com/zapatos.jpg"
    },
    {
        "id": "4",
        "nombre": "Sombrero",
        "precio_venta": 15.99,
        "precio_descuento": 12.99,
        "estrellas": 3,
        "url_imagen": "https://ejemplo.com/sombrero.jpg"
    },
    {
        "id": "5",
        "nombre": "Bufanda",
        "precio_venta": 9.99,
        "precio_descuento": 7.99,
        "estrellas": 4,
        "url_imagen": "https://ejemplo.com/bufanda.jpg"
    },
    {
        "id": "6",
        "nombre": "Vestido",
        "precio_venta": 59.99,
        "precio_descuento": 49.99,
        "estrellas": 5,
        "url_imagen": "https://ejemplo.com/vestido.jpg"
    },
    {
        "id": "7",
        "nombre": "Chaqueta",
        "precio_venta": 79.99,
        "precio_descuento": 69.99,
        "estrellas": 4,
        "url_imagen": "https://ejemplo.com/chaqueta.jpg"
    },
    {
        "id": "8",
        "nombre": "Gorra",
        "precio_venta": 12.99,
        "precio_descuento": 9.99,
        "estrellas": 3,
        "url_imagen": "https://ejemplo.com/gorra.jpg"
    },
    {
        "id": "9",
        "nombre": "Shorts",
        "precio_venta": 29.99,
        "precio_descuento": 24.99,
        "estrellas": 4,
        "url_imagen": "https://ejemplo.com/shorts.jpg"
    },
    {
        "id": "10",
        "nombre": "Sudadera",
        "precio_venta": 39.99,
        "precio_descuento": 34.99,
        "estrellas": 5,
        "url_imagen": "https://ejemplo.com/sudadera.jpg"
    }
]


  findAll() {
    return this.promos;
  }
}
