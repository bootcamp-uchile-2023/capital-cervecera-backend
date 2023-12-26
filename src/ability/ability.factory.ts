import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  ForbiddenError,
  InferSubjects,
} from '@casl/ability';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { Carrito } from 'src/carrito/entity/carrito.entity';
import { Usuario } from 'src/usuario/entity/usuario.entity';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subjects = InferSubjects<typeof Usuario | typeof Carrito> | 'all';
export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class AbilityFactory {
  defineAbility(usuario: Usuario) {
    const { can, build } = new AbilityBuilder<Ability<[Action, Subjects]>>(
      Ability as AbilityClass<AppAbility>,
    );

    if (usuario.isAdmin) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Update, Carrito, { contacto_id: { $eq: usuario.id } });
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
  checkAbility(usuario: Usuario, action: Action, entity: Subjects) {
    const ability = this.defineAbility(usuario);
    try {
      return ForbiddenError.from(ability).throwUnlessCan(action, entity);
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }
}
