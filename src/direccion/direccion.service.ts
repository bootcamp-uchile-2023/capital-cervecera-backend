import { BadRequestException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DireccionMapper } from './mapper/direccion.mapper';

import { CreateDireccionDto } from './dto/direccion-create.dto';
import { UpdateDireccionDto } from './dto/direccion-update.dto';
import { DireccionDto } from './dto/direccion.dto';
import { Direccion } from './entity/direccion.entity';

@Injectable()
export class DireccionService {
  constructor(
    @InjectRepository(Direccion)
    private direccionRepository: Repository<Direccion>,
  ) {}

  async getAllDireccions(): Promise<DireccionDto[]> {
    const resultado: Direccion[] = await this.direccionRepository.find({
      relations: {
        comuna: true,
      },
    });

    return DireccionMapper.toDtoList(resultado);
  }

  async getDireccionById(id: number): Promise<DireccionDto> {
    const resultado: Direccion = await this.direccionRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        comuna: true,
      },
    });
    if (!resultado) {
      throw new BadRequestException();
    }
    return DireccionMapper.toDto(resultado);
  }

  async create(createDireccionDto: CreateDireccionDto): Promise<DireccionDto> {
    const entidad: Direccion = DireccionMapper.toEntity(createDireccionDto);
    const resultado: Direccion = await this.direccionRepository.save(entidad);
    const resultadoWithRelation = await this.direccionRepository.findOne({
      where: {
        id: resultado.id,
      },
      relations: {
        comuna: true,
      },
    });
    return DireccionMapper.toDto(resultadoWithRelation);
  }
  async remove(id: number): Promise<DireccionDto> {
    const encontrado: Direccion = await this.direccionRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el direccion');
    }
    await this.direccionRepository.remove(encontrado);

    return DireccionMapper.toDto(encontrado);
  }

  async update(
    id: number,
    updateDireccionDto: UpdateDireccionDto,
  ): Promise<DireccionDto> {
    const encontrado: Direccion = await this.direccionRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el direccion');
    }

    if (updateDireccionDto.direccion) {
      encontrado.direccion = updateDireccionDto.direccion;
    }

    if (updateDireccionDto.depto_casa) {
      encontrado.depto_casa = updateDireccionDto.depto_casa;
    }
    if (updateDireccionDto.comuna_id) {
      encontrado.comuna_id = updateDireccionDto.comuna_id;
    }

    const resultado: Direccion = await this.direccionRepository.save(
      encontrado,
    );
    const resultadoWithRelation = await this.direccionRepository.findOne({
      where: {
        id: resultado.id,
      },
      relations: {
        comuna: true,
      },
    });
    return DireccionMapper.toDto(resultadoWithRelation);
  }
}
