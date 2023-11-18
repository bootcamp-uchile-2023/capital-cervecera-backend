import { BadRequestException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactoMapper } from './mapper/contacto.mapper';

import { CreateContactoDto } from './dto/contacto-create.dto';
import { UpdateContactoDto } from './dto/contacto-update.dto';
import { ContactoDto } from './dto/contacto.dto';
import { Contacto } from './entity/contacto.entity';

@Injectable()
export class ContactoService {
  constructor(
    @InjectRepository(Contacto)
    private contactoRepository: Repository<Contacto>,
  ) {}

  async getAllContactos(): Promise<ContactoDto[]> {
    const resultado: Contacto[] = await this.contactoRepository.find({
      relations: {
        cliente: true,
      },
    });

    return ContactoMapper.toDtoList(resultado);
  }

  async getContactoById(id: number): Promise<ContactoDto> {
    const resultado: Contacto = await this.contactoRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        cliente: true,
      },
    });
    if (!resultado) {
      throw new BadRequestException();
    }
    return ContactoMapper.toDto(resultado);
  }

  async create(createContactoDto: CreateContactoDto): Promise<ContactoDto> {
    const entidad: Contacto = ContactoMapper.toEntity(createContactoDto);
    const resultado: Contacto = await this.contactoRepository.save(entidad);
    const resultadoWithRelation = await this.contactoRepository.findOne({
      where: {
        id: resultado.id,
      },
      relations: {
        cliente: true,
      },
    });
    console.log(resultadoWithRelation);
    return ContactoMapper.toDto(resultadoWithRelation);
  }
  async remove(id: number): Promise<ContactoDto> {
    const encontrado: Contacto = await this.contactoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el contacto');
    }
    await this.contactoRepository.remove(encontrado);

    return ContactoMapper.toDto(encontrado);
  }

  async update(
    id: number,
    updateContactoDto: UpdateContactoDto,
  ): Promise<ContactoDto> {
    const encontrado: Contacto = await this.contactoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!encontrado) {
      throw Error('No se encontró el contacto');
    }

    if (updateContactoDto.email) {
      encontrado.email = updateContactoDto.email;
    }
    if (updateContactoDto.telefono) {
      encontrado.telefono = updateContactoDto.telefono;
    }
    if (updateContactoDto.cliente_id) {
      encontrado.cliente_id = updateContactoDto.cliente_id;
    }

    const resultado: Contacto = await this.contactoRepository.save(encontrado);
    const resultadoWithRelation = await this.contactoRepository.findOne({
      where: {
        id: resultado.id,
      },
      relations: {
        cliente: true,
      },
    });
    return ContactoMapper.toDto(resultadoWithRelation);
  }
}
