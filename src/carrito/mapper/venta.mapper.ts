import { CreateVentaDto } from '../dto/create-venta.dto';
import { Venta } from '../entity/venta.entity';

export class VentaMapper {
  static toDto(entidad: Venta): CreateVentaDto {
    const dto = new CreateVentaDto();

    dto.tipo = entidad.tipo;
    dto.monto = entidad.monto;
    dto.forma_pago = entidad.forma_pago;
    dto.total = entidad.total;

    return dto;
  }

  static toDtoList(entidades: Venta[]): CreateVentaDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toEntity(dto: CreateVentaDto): Venta {
    const entidad = new Venta();

    entidad.tipo = dto.tipo;
    entidad.monto = dto.monto;
    entidad.forma_pago = dto.forma_pago;
    entidad.total = dto.total;

    return entidad;
  }
}
