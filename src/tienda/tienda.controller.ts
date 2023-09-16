import { Controller, Get } from '@nestjs/common';
import { TiendaService } from './tienda.service';

@Controller('tienda')
export class TiendaController {
  constructor(private readonly tiendaService: TiendaService) {}
  @Get()
  getAllTienda() {
    return ['aca veremos el modulo de tienda!'];
  }
  @Get('productos')
  getAllProductos() {
    return this.tiendaService.getAllProductos();
  }

  @Get('promociones')
  getAllPromociones() {
    return this.tiendaService.getAllPromociones();
  }

  @Get('merchandising')
  getAllMerchandising() {
    return this.tiendaService.getAllProductos();
  }

  @Get('suscripciones')
  getAllSuscripciones() {
    return this.tiendaService.getAllProductos();
  }
}
