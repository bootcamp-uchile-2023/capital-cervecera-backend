import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  NotFoundException,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CheckAbilities } from 'src/ability/abilities.decorator';
import { Action } from 'src/ability/ability.factory';
import { ContactoDto } from 'src/contacto/dto/contacto.dto';
import { Public } from 'src/guards/public.decorator';
import { CarritoService } from './carrito.service';
import { CarritoDto } from './dto/carrito.dto';
import { CreateVentaDto } from './dto/create-venta.dto';
import { Carrito } from './entity/carrito.entity';

@Controller('carrito')
export class CarritoController {
  private readonly logger = new Logger(CarritoController.name);
  constructor(private readonly carritoService: CarritoService) {}

  @Public()
  @Get()
  @ApiOkResponse({
    description: 'carritos encontrados',
    type: CarritoDto,
    isArray: true,
  })
  async getAllCarritos(): Promise<CarritoDto[]> {
    this.logger.log('aca se muestran todos los carritos encontrados');
    return await this.carritoService.getAllCarritos();
  }

  @ApiHeader({
    name: 'Autorizacion',
    description: 'Token de autorizacion',
    required: true,
  })
  @ApiParam({
    name: 'id',
    description: 'identificador del carrito que desea buscar',
  })
  @Get(':id')
  getCarritoById(@Param('id') id: number, @Req() req: Request) {
    const user = req['CURRENT_USER'];
    this.logger.log('aca se muestra el carrito por ID');
    return this.carritoService.getCarritoById(id, user);
  }
  /*
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
    this.logger.log('aca se crea el carrito ');
    try {
      const resultado = await this.carritoService.create(createCarritoDto);
      this.logger.log('carrito creado');
      return resultado;
    } catch (error) {
      this.logger.error('no se puedo crear el carrito');
      throw new BadRequestException(error.message);
    }
  }
  */
  @ApiHeader({
    name: 'Autorizacion',
    description: 'Token de autorizacion',
    required: true,
  })
  @Delete(':id')
  @CheckAbilities({ action: Action.Delete, subject: Carrito })
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

  /*@Patch(':id')
  @ApiBody({
    type: UpdateCarritoDto,
    description: 'Datos del carrito a actualizar',
  })
  @ApiOkResponse({ description: 'Carrito actualizado', type: CarritoDto })
  @ApiNotFoundResponse({ description: 'No se encontró el carrito' })
  async update(
    @Param('id') id: number,
    @Body() updateCarritoDto: UpdateCarritoDto,
    @Req() req: Request,
  ): Promise<CarritoDto> {
    this.logger.log('verificando que sea el mismo usuario del carrito');

    const user = req['CURRENT_USER'];
    try {
      const resultado = await this.carritoService.update(
        id,
        updateCarritoDto,
        user,
      );
      return resultado;
    } catch (error) {
      this.logger.warn('no es el mismo usuario del carrito');

      throw new NotFoundException(error.message);
    }
  }
  */

  @ApiHeader({
    name: 'Autorizacion',
    description: 'Token de autorizacion',
    required: true,
  })
  @Get(':id/contacto')
  async getCarritoContactoById(
    @Param('id') id: number,
    @Req() req: Request,
  ): Promise<ContactoDto> {
    this.logger.log(
      'aca se muestra el id del carrito y su contacto(creador de carrito)',
    );
    const user = req['CURRENT_USER'];

    return await this.carritoService.getCarritoContactoById(id, user);
  }
  @ApiHeader({
    name: 'Autorizacion',
    description: 'Token de autorizacion',
    required: false,
  })
  @Public()
  @Post('envio')
  @ApiBody({
    type: CreateVentaDto,
    description: 'Datos del carrito a crear',
  })
  @ApiCreatedResponse({
    description: 'El carrito se creó correctamente',
    type: CreateVentaDto,
  })
  async createVenta(
    @Body() createVentaDto: CreateVentaDto,
    @Req() req: Request,
  ): Promise<number> {
    const user = req['CURRENT_USER'];

    this.logger.log('creando carrito/venta');

    try {
      const resultado = await this.carritoService.createVenta(
        createVentaDto,
        user,
      );
      return resultado;
    } catch (error) {
      this.logger.log('no se pudo crear la venta/carrito');
      throw new BadRequestException(error.message);
    }
  }
}
