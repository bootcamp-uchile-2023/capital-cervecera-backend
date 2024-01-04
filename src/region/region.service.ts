import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegionDto } from './dto/region-create.dto';
import { UpdateRegionDto } from './dto/region-update.dto';
import { RegionDto } from './dto/region.dto';
import { Region } from './entity/region.entity';
import { RegionMapper } from './mapper/region.mapper';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region)
    private regionRepository: Repository<Region>,
  ) {}

  async getAllRegions(): Promise<RegionDto[]> {
    const resultado: Region[] = await this.regionRepository.find();

    return RegionMapper.toDtoList(resultado);
  }

  async getRegionById(id: number): Promise<RegionDto> {
    const resultado: Region = await this.regionRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!resultado) {
      throw new BadRequestException();
    }
    return RegionMapper.toDto(resultado);
  }

  async create(createRegionDto: CreateRegionDto): Promise<RegionDto> {
    const entidad: Region = RegionMapper.toEntity(createRegionDto);
    const resultado: Region = await this.regionRepository.save(entidad);

    return RegionMapper.toDto(resultado);
  }

  async remove(id: number): Promise<RegionDto> {
    const encontrado: Region = await this.regionRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el region');
    }
    await this.regionRepository.remove(encontrado);

    return RegionMapper.toDto(encontrado);
  }

  async update(
    id: number,
    updateRegionDto: UpdateRegionDto,
  ): Promise<RegionDto> {
    const encontrado: Region = await this.regionRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró la region');
    }

    if (updateRegionDto.nombre) {
      encontrado.nombre = updateRegionDto.nombre;
    }

    const resultado: Region = await this.regionRepository.save(encontrado);

    return RegionMapper.toDto(resultado);
  }
}
