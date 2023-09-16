import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductosDto } from './dto/productos-create.dto';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @ApiBody({
    description: 'Este producto debe poseer los siguientes atributos',
    type: CreateProductosDto,
  })
  @ApiResponse({
    status: 201,
    description: 'se registro con exito  ',
    type: CreateProductosDto,
  })
  @ApiResponse({ status: 403, description: 'No tiene permiso' })
  @Post()
  createProductos(@Body() createProductosDto: CreateProductosDto) {
    return createProductosDto;
  }

  @Get('productos')
  getAllProductos() {
    return this.productosService.getAllProductos();
  }
  @ApiParam({
    name: 'name',
    description: 'identificador del producto que desea buscar',
  })
  @Get('productos/:name')
  getProductoByName(@Param('name') name: string) {
    return this.productosService.getProductoByName(name);
  }
}
