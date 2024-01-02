import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  ForbiddenError,
  InferSubjects,
} from '@casl/ability';
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { Carrito } from 'src/carrito/entity/carrito.entity';
import { Contacto } from 'src/contacto/entity/contacto.entity';
import { Producto } from 'src/productos/entity/producto.entity';
import { Usuario } from 'src/usuario/entity/usuario.entity';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subjects =
  | InferSubjects<typeof Usuario>
  | InferSubjects<typeof Carrito>
  | InferSubjects<typeof Producto>
  | InferSubjects<typeof Contacto>
  | 'all';
export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class AbilityFactory {
  private readonly logger = new Logger();

  defineAbility(usuario: Usuario) {
    const { can, build } = new AbilityBuilder<Ability<[Action, Subjects]>>(
      Ability as AbilityClass<AppAbility>,
    );

    if (usuario.isAdmin) {
      can(Action.Manage, 'all'); // el admin puede hacer todo
    } else {
      can(Action.Create, Carrito);
      if (usuario.contacto) {
        can(Action.Update, Carrito, {
          contacto_id: { $eq: usuario.contacto.id },
        }); // solo el creador de su carrito puede actualizar SU carrito
        can(Action.Read, Contacto, { id: { $eq: usuario.contacto.id } }); // solo el creador de su carrito puede LEER/VER SU carrito
        can(Action.Read, Carrito, {
          contacto_id: { $eq: usuario.contacto.id },
        }); // solo el creador de su carrito puede VER SU carrito
      }
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
  checkAbility(usuario: Usuario, action: Action, entity: Subjects) {
    const ability = this.defineAbility(usuario);
    const isAllowed = ability.can(action, entity);
    try {
      if (!isAllowed) {
        this.logger.log(
          'no tiene acceso, solo el admin puede realizar este proceso',
        );
      }
      return ForbiddenError.from(ability).throwUnlessCan(action, entity); // aca avisará que no puede realizar la acción por que no tiene los permisos
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }
}
