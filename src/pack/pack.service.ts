import { BadRequestException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PackMapper } from './mapper/pack.mapper';

import { CreatePackDto } from './dto/pack-create.dto';
import { UpdatePackDto } from './dto/pack-update.dto';
import { PackDto } from './dto/pack.dto';
import { Pack } from './entity/pack.entity';

@Injectable()
export class PackService {
  constructor(
    @InjectRepository(Pack)
    private packRepository: Repository<Pack>,
  ) {}

  async getAllPacks(): Promise<PackDto[]> {
    const resultado: Pack[] = await this.packRepository.find();

    return PackMapper.toDtoList(resultado);
  }

  async getPackById(id: number): Promise<PackDto> {
    const resultado: Pack = await this.packRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!resultado) {
      throw new BadRequestException();
    }
    return PackMapper.toDto(resultado);
  }

  async create(createPackDto: CreatePackDto): Promise<PackDto> {
    const entidad: Pack = PackMapper.toEntity(createPackDto);
    const resultado: Pack = await this.packRepository.save(entidad);

    return PackMapper.toDto(resultado);
  }
  async remove(id: number): Promise<PackDto> {
    const encontrado: Pack = await this.packRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el pack');
    }
    await this.packRepository.remove(encontrado);

    return PackMapper.toDto(encontrado);
  }

  async update(id: number, updatePackDto: UpdatePackDto): Promise<PackDto> {
    const encontrado: Pack = await this.packRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el pack');
    }

    if (updatePackDto.nombre) {
      encontrado.nombre = updatePackDto.nombre;
    }
    if (updatePackDto.precio_venta) {
      encontrado.precio_venta = updatePackDto.precio_venta;
    }

    const resultado: Pack = await this.packRepository.save(encontrado);

    return PackMapper.toDto(resultado);
  }
}
