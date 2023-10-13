import { Injectable } from '@nestjs/common';
import { data } from '../data/cervezas';
import { Producto, ProductsFilter } from '../productos/interfaces/productos.interface';

@Injectable()
export class RecomendadosService {
  private productos = data as Producto[];
  getAllProductos() {
        return this.productos;
  }

  getProductoById(id: string) {
    return this.productos.find((producto) => producto.id === id);
  }
}
