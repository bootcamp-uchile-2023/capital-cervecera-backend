import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ClienteProductoService } from './cliente_producto.service';
import { CreateClienteProductoDto } from './dto/cliente_producto-create.dto';
import { ClienteProductoDto } from './dto/cliente_producto.dto';

@Controller('cliente_producto')
export class ClienteProductoController {
  constructor(
    private readonly cliente_productoService: ClienteProductoService,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'cliente_productos encontrados',
    type: ClienteProductoDto,
    isArray: true,
  })
  async getAllClienteProductos(): Promise<ClienteProductoDto[]> {
    return await this.cliente_productoService.getAllClienteProductos();
  }

  @Post()
  @ApiBody({
    type: CreateClienteProductoDto,
    description: 'Datos del cliente_producto a crear',
  })
  @ApiCreatedResponse({
    description: 'El cliente_producto se creó correctamente',
    type: ClienteProductoDto,
  })
  async create(
    @Body() createClienteProductoDto: CreateClienteProductoDto,
  ): Promise<ClienteProductoDto> {
    try {
      const resultado = await this.cliente_productoService.create(
        createClienteProductoDto,
      );
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
