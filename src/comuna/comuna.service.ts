import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComunaDto } from './dto/comuna-create.dto';
import { UpdateComunaDto } from './dto/comuna-update.dto';
import { ComunaDto } from './dto/comuna.dto';
import { Comuna } from './entity/comuna.entity';
import { ComunaMapper } from './mapper/comuna.mapper';

@Injectable()
export class ComunaService {
  constructor(
    @InjectRepository(Comuna)
    private comunaRepository: Repository<Comuna>,
  ) {}

  async getAllComunas(): Promise<ComunaDto[]> {
    const resultado: Comuna[] = await this.comunaRepository.find({
      relations: {
        region: true,
      },
    });

    return ComunaMapper.toDtoList(resultado);
  }

  async getComunaById(id: number): Promise<ComunaDto> {
    const resultado: Comuna = await this.comunaRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        region: true,
      },
    });
    if (!resultado) {
      throw new BadRequestException();
    }
    return ComunaMapper.toDto(resultado);
  }

  async create(createComunaDto: CreateComunaDto): Promise<ComunaDto> {
    const entidad: Comuna = ComunaMapper.toEntity(createComunaDto);
    const resultado: Comuna = await this.comunaRepository.save(entidad);
    const resultadoWithRelation = await this.comunaRepository.findOne({
      where: {
        id: resultado.id,
      },
      relations: {
        region: true,
      },
    });
    return ComunaMapper.toDto(resultadoWithRelation);
  }

  async remove(id: number): Promise<ComunaDto> {
    const encontrado: Comuna = await this.comunaRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el comuna');
    }
    await this.comunaRepository.remove(encontrado);

    return ComunaMapper.toDto(encontrado);
  }

  async update(
    id: number,
    updateComunaDto: UpdateComunaDto,
  ): Promise<ComunaDto> {
    const encontrado: Comuna = await this.comunaRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el comuna');
    }

    if (updateComunaDto.nombre) {
      encontrado.nombre = updateComunaDto.nombre;
    }
    if (updateComunaDto.region_id) {
      encontrado.region_id = updateComunaDto.region_id;
    }

    const resultado: Comuna = await this.comunaRepository.save(encontrado);
    const resultadoWithRelation = await this.comunaRepository.findOne({
      where: {
        id: resultado.id,
      },
      relations: {
        region: true,
      },
    });
    return ComunaMapper.toDto(resultadoWithRelation);
  }
}
