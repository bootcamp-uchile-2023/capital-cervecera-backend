export interface Producto {
  id: string;
  casa_cervecera: string;
  tipo_de_cerveza: string;
  grado_alcoholico: number;
  amargor_ibu: string;
  nombre: string;
  estrellas: number;
  precio_compra: number;
  precio_venta: number;
}

export interface ProductsFilter {
  casa_cervecera: string;
  tipo_de_cerveza: string;
  grado_alcoholico: number;
  amargor_ibu: string;
  precio_minimo: number;
  precio_maximo: number;
}
