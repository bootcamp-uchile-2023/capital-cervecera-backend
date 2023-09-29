import { Injectable } from '@nestjs/common';
import { data } from '../data/cervezas';
import { Producto, ProductsFilter } from './interfaces/productos.interface';

@Injectable()
export class ProductosService {
  private productos = data as Producto[];
  getAllProductos(query: ProductsFilter) {
    let filteredProduct = [...this.productos];
    Object.keys(query).forEach((item) => {
      if (item === 'precio_minimo') {
        filteredProduct = filteredProduct.filter(
          (prod) => prod.precio_venta >= +query[item],
        );
        return;
      }
      if (item === 'precio_maximo') {
        filteredProduct = filteredProduct.filter(
          (prod) => prod.precio_venta <= +query[item],
        );
        return;
      }
      filteredProduct = filteredProduct.filter(
        (prod) => prod[item] == query[item],
      );
    });

    return filteredProduct;
  }
  getProductoById(id: string) {
    return this.productos.find((producto) => producto.id === id);
  }
}
