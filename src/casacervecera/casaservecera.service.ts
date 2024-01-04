import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCasaCerveceraDto } from './dto/casacervecera-create.dto';
import { UpdateCasaCerveceraDto } from './dto/casacervecera-update.dto';
import { CasaCerveceraDto } from './dto/casacervecera.dto';
import { Casa_cervecera } from './entity/casacervecera.entity';
import { CasaCerveceraMapper } from './mapper/casacervecera.mapper';

@Injectable()
export class CasaCerveceraService {
  constructor(
    @InjectRepository(Casa_cervecera)
    private casacerveceraRepository: Repository<Casa_cervecera>,
  ) {}

  async getAllCasas(): Promise<CasaCerveceraDto[]> {
    const resultado: Casa_cervecera[] =
      await this.casacerveceraRepository.find();
    return CasaCerveceraMapper.toDtoList(resultado);
  }

  async getCasaById(id: number): Promise<CasaCerveceraDto> {
    const resultado: Casa_cervecera =
      await this.casacerveceraRepository.findOne({
        where: {
          id: id,
        },
      });
    if (!resultado) {
      throw new BadRequestException();
    }
    return CasaCerveceraMapper.toDto(resultado);
  }

  async create(
    createCasaCerveceraDto: CreateCasaCerveceraDto,
  ): Promise<CasaCerveceraDto> {
    const existe: boolean = await this.casacerveceraRepository.exist({
      where: {
        nombre: createCasaCerveceraDto.nombre,
      },
    });

    if (existe) {
      throw Error('Ya existe una casa cervecera con ese nombre');
    }
    const entidad: Casa_cervecera = CasaCerveceraMapper.toEntity(
      createCasaCerveceraDto,
    );

    const resultado: Casa_cervecera = await this.casacerveceraRepository.save(
      entidad,
    );

    return CasaCerveceraMapper.toDto(resultado);
  }

  async remove(id: number): Promise<CasaCerveceraDto> {
    const encontrado: Casa_cervecera =
      await this.casacerveceraRepository.findOne({
        where: {
          id: id,
        },
      });
    if (!encontrado) {
      throw Error('No se encontró la casa cervecera');
    }
    await this.casacerveceraRepository.remove(encontrado);
    return CasaCerveceraMapper.toDto(encontrado);
  }

  async update(
    id: number,
    updateCasaCerveceraDto: UpdateCasaCerveceraDto,
  ): Promise<CasaCerveceraDto> {
    const encontrado: Casa_cervecera =
      await this.casacerveceraRepository.findOne({
        where: {
          id: id,
        },
      });
    if (!encontrado) {
      throw Error('No se encontró la casa cervecera');
    }

    if (updateCasaCerveceraDto.nombre) {
      encontrado.nombre = updateCasaCerveceraDto.nombre;
    }

    const resultado: Casa_cervecera = await this.casacerveceraRepository.save(
      encontrado,
    );
    return CasaCerveceraMapper.toDto(resultado);
  }
}
