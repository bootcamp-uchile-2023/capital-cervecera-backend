import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { CheckAbilities } from 'src/ability/abilities.decorator';
import { Action } from 'src/ability/ability.factory';
import { Public } from 'src/guards/public.decorator';
import { CreateProductoDto } from './dto/producto-create.dto';
import { UpdateProductoDto } from './dto/producto-update.dto';
import { ProductoDto } from './dto/producto.dto';
import { Producto } from './entity/producto.entity';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @ApiQuery({
    name: 'z-a',
    description: 'buscar nombre en descendente',
    type: Boolean,
    required: false,
  })
  @ApiQuery({
    name: 'a-z',
    description: 'buscar nombre en ascendente',
    type: Boolean,
    required: false,
  })
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
    type: String,
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
  @ApiQuery({
    name: 'is_promo',
    description: 'Ingresar si el producto esta en promo',
    type: Boolean,
    required: false,
  })
  @ApiQuery({
    name: 'is_recomendado',
    description: 'Ingresar si el producto es recomendado',
    type: Boolean,
    required: false,
  })
  @Public()
  @Get()
  @ApiOkResponse({
    description: 'Productos encontrados',
    type: ProductoDto,
    isArray: true,
  })
  async getAllProductos(@Query() query: any): Promise<ProductoDto[]> {
    return await this.productosService.getAllProductos(query);
  }
  @Public()
  @Get('promos')
  async getPromos() {
    return await this.productosService.getPromos();
  }

  @Public()
  @Get('recomendados')
  async getRecomendados() {
    return await this.productosService.getRecomendados();
  }

  @ApiParam({
    name: 'id',
    description: 'identificador del producto que desea buscar',
  })
  @Public()
  @Get(':id')
  getProductoById(@Param('id') id: number) {
    return this.productosService.getProductoById(id);
  }

  @ApiHeader({
    name: 'Autorizacion',
    description: 'Token de autorizacion',
    required: true,
  })
  @Post()
  @CheckAbilities({ action: Action.Create, subject: Producto })
  @ApiBody({
    type: CreateProductoDto,
    description: 'Datos del producto a crear',
  })
  @ApiBadRequestResponse({
    description: 'Ya existe un producto con ese nombre',
  })
  @ApiCreatedResponse({
    description: 'El producto se creó correctamente',
    type: ProductoDto,
  })
  async create(
    @Body() createProductoDto: CreateProductoDto,
  ): Promise<ProductoDto> {
    try {
      const resultado = await this.productosService.create(createProductoDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @ApiHeader({
    name: 'Autorizacion',
    description: 'Token de autorizacion',
    required: true,
  })
  @Delete(':id')
  @ApiOkResponse({ description: 'Producto eliminado', type: ProductoDto })
  @ApiNotFoundResponse({ description: 'No se encontró el producto' })
  async remove(@Param('id') id: number): Promise<ProductoDto> {
    try {
      const resultado = await this.productosService.remove(id);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @ApiHeader({
    name: 'Autorizacion',
    description: 'Token de autorizacion',
    required: true,
  })
  @Patch(':id')
  @CheckAbilities({ action: Action.Update, subject: Producto })
  @ApiBody({
    type: UpdateProductoDto,
    description: 'Datos del producto a actualizar',
  })
  @ApiOkResponse({ description: 'Producto actualizado', type: ProductoDto })
  @ApiNotFoundResponse({ description: 'No se encontró el producto' })
  async update(
    @Param('id') id: number,
    @Body() updateProductoDto: UpdateProductoDto,
  ): Promise<ProductoDto> {
    try {
      const resultado = await this.productosService.update(
        id,
        updateProductoDto,
      );
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
