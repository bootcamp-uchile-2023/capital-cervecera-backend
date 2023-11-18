import { BadRequestException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarritoMapper } from './mapper/carrito.mapper';

import { CreateCarritoDto } from './dto/carrito-create.dto';
import { UpdateCarritoDto } from './dto/carrito-update.dto';
import { CarritoDto } from './dto/carrito.dto';
import { Carrito } from './entity/carrito.entity';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private carritoRepository: Repository<Carrito>,
  ) {}

  async getAllCarritos(): Promise<CarritoDto[]> {
    const resultado: Carrito[] = await this.carritoRepository.find();

    return CarritoMapper.toDtoList(resultado);
  }

  async getCarritoById(id: number): Promise<CarritoDto> {
    const resultado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!resultado) {
      throw new BadRequestException();
    }
    return CarritoMapper.toDto(resultado);
  }

  async create(createCarritoDto: CreateCarritoDto): Promise<CarritoDto> {
    const entidad: Carrito = CarritoMapper.toEntity(createCarritoDto);
    const resultado: Carrito = await this.carritoRepository.save(entidad);
    console.log(resultado);
    return CarritoMapper.toDto(resultado);
  }
  async remove(id: number): Promise<CarritoDto> {
    const encontrado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el carrito');
    }
    await this.carritoRepository.remove(encontrado);
    return CarritoMapper.toDto(encontrado);
  }

  async update(
    id: number,
    updateCarritoDto: UpdateCarritoDto,
  ): Promise<CarritoDto> {
    const encontrado: Carrito = await this.carritoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el carrito');
    }

    if (updateCarritoDto.estado) {
      encontrado.estado = updateCarritoDto.estado;
    }
    if (updateCarritoDto.sub_total) {
      encontrado.sub_total = updateCarritoDto.sub_total;
    }
    if (updateCarritoDto.total) {
      encontrado.total = updateCarritoDto.total;
    }

    const resultado: Carrito = await this.carritoRepository.save(encontrado);
    return CarritoMapper.toDto(resultado);
  }
}
