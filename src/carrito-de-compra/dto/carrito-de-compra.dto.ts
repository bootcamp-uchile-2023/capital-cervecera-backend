import { ProductoDto } from '../../tienda/dto/tienda.dto';

export class carritoCompraDto {
  readonly productos: ProductoDto [];
  readonly promociones: string;
  readonly subtotal: number;
  readonly total: number;
}
