import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductosDto } from './dto/productos-create.dto';
import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ProductsFilter } from './interfaces/productos.interface';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @ApiBody({
    description: 'Este producto debe poseer los siguientes atributos',
    type: CreateProductosDto,
  })
  // @ApiResponse({
  //   status: 201,
  //   description: 'se registro con exito  ',
  //   type: CreateProductosDto,
  // })
  // @ApiResponse({ status: 403, description: 'No tiene permiso' })
  @Post()
  createProductos(@Body() createProductosDto: CreateProductosDto) {
    return createProductosDto;
  }
  @ApiQuery({
    name: 'precio_maximo',
    description:
      'Ingresar precio maximo de venta del producto que desea buscar',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'precio_minimo',
    description: 'ingresar precio minimo del producto que desea buscar',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'amargor_ibu',
    description: 'Identificador del producto que se desea buscar',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'grado_alcoholico',
    description: 'Identificador del producto que se desea buscar',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'tipo_de_cerveza',
    description: 'Identificador del producto que se desea buscar',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'casa_cervecera',
    description: 'Identificador del producto que se desea buscar',
    type: String,
    required: false,
  })
  @Get()
  getAllProductos(@Query() query: ProductsFilter) {
    return this.productosService.getAllProductos(query);
  }
  @ApiParam({
    name: 'id',
    description: 'identificador del producto que desea buscar',
  })
  @Get('productos/:id')
  getProductoById(@Param('id') id: string) {
    return this.productosService.getProductoById(id);
  }
}
