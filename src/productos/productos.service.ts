import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
  private productos = [
    {
      nombre: 'Kunstman',
      estrellas: 3,
      precio_compra: 1000,
      precio_venta: 1500,
    },
    {
      nombre: 'Corona',
      estrellas: 1,
      precio_compra: 500,
      precio_venta: 1000,
    },
  ];
  getAllProductos() {
    return this.productos;
  }
  getProductoByName(nombre: string) {
    return this.productos.find((producto) => producto.nombre === nombre);
  }
}
