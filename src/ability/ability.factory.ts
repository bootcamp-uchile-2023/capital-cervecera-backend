import {
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
  MongoAbility,
  PureAbility,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Carrito } from 'src/carrito/entity/carrito.entity';
import { Usuario } from 'src/usuario/entity/usuario.entity';

export enum Action {
  Manage = 'manage', // puede hacer todas las acciones, carta bonus
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subjects = InferSubjects<typeof Usuario | typeof Carrito> | 'all'; // el all es la carta dios para hacer todas las acciones en subjects

export type AppAbility = MongoAbility<[Action, Subjects]>; // ability me salia deprecated ( vencido...)

@Injectable()
export class AbilityFactory {
  defineAbility(usuario: Usuario) {
    const { can, cannot, build } = new AbilityBuilder(
      PureAbility as AbilityClass<AppAbility>,
    );

    if (usuario.isAdmin) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, 'all');
      cannot(Action.Create, Usuario).because(
        'Solo el admin puede registrar usuarios',
      );
      can(Action.Update, Carrito, { cliente_id: usuario.id }).because(
        'solo el dueño de su carrito puede editar SU carrito ',
      );
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
