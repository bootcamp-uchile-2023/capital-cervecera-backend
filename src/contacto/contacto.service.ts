import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactoProducto } from 'src/contacto_producto/entity/contacto_producto.entity';
import { Repository } from 'typeorm';
import { CreateContactoDto } from './dto/contacto-create.dto';
import { UpdateContactoDto } from './dto/contacto-update.dto';
import { ContactoDto } from './dto/contacto.dto';
import { EstrellasCreateDto } from './dto/estrellas-create.dto';
import { Contacto } from './entity/contacto.entity';
import { ContactoMapper } from './mapper/contacto.mapper';

@Injectable()
export class ContactoService {
  constructor(
    @InjectRepository(Contacto)
    private contactoRepository: Repository<Contacto>,
    @InjectRepository(ContactoProducto)
    private contactoProductoRepository: Repository<ContactoProducto>,
  ) {}

  async getAllContactos(): Promise<ContactoDto[]> {
    const resultado: Contacto[] = await this.contactoRepository.find({
      relations: {
        usuario: true,
        direccion: true,
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
        usuario: true,
        direccion: true,
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
        usuario: true,
        direccion: true,
      },
    });

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

    if (updateContactoDto.usuario_id) {
      encontrado.usuario_id = updateContactoDto.usuario_id;
    }
    if (updateContactoDto.direccion_id) {
      encontrado.direccion_id = updateContactoDto.direccion_id;
    }
    if (updateContactoDto.rut) {
      encontrado.rut = updateContactoDto.rut;
    }
    if (updateContactoDto.nombre) {
      encontrado.nombre = updateContactoDto.nombre;
    }
    if (updateContactoDto.esta_atento) {
      encontrado.esta_atento = updateContactoDto.esta_atento;
    }
    if (updateContactoDto.apellido_materno) {
      encontrado.apellido_materno = updateContactoDto.apellido_materno;
    }
    if (updateContactoDto.apellido_paterno) {
      encontrado.apellido_paterno = updateContactoDto.apellido_paterno;
    }
    if (updateContactoDto.base64_imagen) {
      encontrado.base64_imagen = updateContactoDto.base64_imagen;
    }
    if (updateContactoDto.email) {
      encontrado.email = updateContactoDto.email;
    }

    const resultado: Contacto = await this.contactoRepository.save(encontrado);
    const resultadoWithRelation = await this.contactoRepository.findOne({
      where: {
        id: resultado.id,
      },
      relations: {
        usuario: true,
        direccion: true,
      },
    });
    return ContactoMapper.toDto(resultadoWithRelation);
  }

  async estrellasCreate(estrellasCreateDto: EstrellasCreateDto) {
    const entidad: EstrellasCreateDto =
      ContactoMapper.toEstrellasEntity(estrellasCreateDto);
    const resultado: EstrellasCreateDto =
      await this.contactoProductoRepository.save(entidad);
    return ContactoMapper.toEstrellasEntity(resultado);
  }
}
