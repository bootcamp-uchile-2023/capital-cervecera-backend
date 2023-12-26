import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ContactoProductoService } from './contacto_producto.service';
import { CreateContactoProductoDto } from './dto/contacto_producto-create.dto';
import { ContactoProductoDto } from './dto/contacto_producto.dto';

@Controller('contacto_producto')
export class ContactoProductoController {
  constructor(
    private readonly contacto_productoService: ContactoProductoService,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'contacto_productos encontrados',
    type: ContactoProductoDto,
    isArray: true,
  })
  async getAllContactoProductos(): Promise<ContactoProductoDto[]> {
    return await this.contacto_productoService.getAllContactoProductos();
  }

  @Post()
  @ApiBody({
    type: CreateContactoProductoDto,
    description: 'Datos del contacto_producto a crear',
  })
  @ApiCreatedResponse({
    description: 'El contacto_producto se creó correctamente',
    type: ContactoProductoDto,
  })
  async create(
    @Body() createContactoProductoDto: CreateContactoProductoDto,
  ): Promise<ContactoProductoDto> {
    try {
      const resultado = await this.contacto_productoService.create(
        createContactoProductoDto,
      );
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
