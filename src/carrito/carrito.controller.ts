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
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from './dto/carrito-create.dto';
import { UpdateCarritoDto } from './dto/carrito-update.dto';
import { CarritoDto } from './dto/carrito.dto';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Get()
  @ApiOkResponse({
    description: 'carritos encontrados',
    type: CarritoDto,
    isArray: true,
  })
  async getAllCarritos(): Promise<CarritoDto[]> {
    return await this.carritoService.getAllCarritos();
  }

  @ApiParam({
    name: 'id',
    description: 'identificador del carrito que desea buscar',
  })
  @Get('carrito/:id')
  getCarritoById(@Param('id') id: number) {
    return this.carritoService.getCarritoById(id);
  }

  @Post()
  @ApiBody({
    type: CreateCarritoDto,
    description: 'Datos del carrito a crear',
  })
  @ApiCreatedResponse({
    description: 'El carrito se creó correctamente',
    type: CarritoDto,
  })
  async create(
    @Body() createCarritoDto: CreateCarritoDto,
  ): Promise<CarritoDto> {
    try {
      const resultado = await this.carritoService.create(createCarritoDto);
      return resultado;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Carrito eliminado', type: CarritoDto })
  @ApiNotFoundResponse({ description: 'No se encontró el carrito' })
  async remove(@Param('id') id: number): Promise<CarritoDto> {
    try {
      const resultado = await this.carritoService.remove(id);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  @ApiBody({
    type: UpdateCarritoDto,
    description: 'Datos del carrito a actualizar',
  })
  @ApiOkResponse({ description: 'Carrito actualizado', type: CarritoDto })
  @ApiNotFoundResponse({ description: 'No se encontró el carrito' })
  async update(
    @Param('id') id: number,
    @Body() updateCarritoDto: UpdateCarritoDto,
  ): Promise<CarritoDto> {
    try {
      const resultado = await this.carritoService.update(id, updateCarritoDto);
      return resultado;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
