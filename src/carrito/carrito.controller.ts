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
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { JWTGuard } from 'src/guards/jwt.guard';
import { Public } from 'src/guards/public.decorator';
import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from './dto/carrito-create.dto';
import { UpdateCarritoDto } from './dto/carrito-update.dto';
import { CarritoDto } from './dto/carrito.dto';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Public()
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
  @Public()
  @Get('{carrito_id}')
  getCarritoById(@Param('id') id: number) {
    return this.carritoService.getCarritoById(id);
  }
  @Public()
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

  @ApiHeader({
    name: 'Autorizacion',
    description: 'Token de autorizacion',
    required: true,
  })
  @UseGuards(JWTGuard)
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

  @Get('contacto')
  getCarritoClienteById(@Param('id') id: number) {
    return this.carritoService.getCarritoClienteById(id);
  }
}
