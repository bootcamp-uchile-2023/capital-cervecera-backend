import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilityModule } from 'src/ability/ability.module';
import { Usuario } from './entity/usuario.entity';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [
    AbilityModule,
    TypeOrmModule.forFeature([Usuario]),
    JwtModule.register({
      global: true,
      secret: 'capitalcervecera1234',
      signOptions: { expiresIn: '5000s' }, // TIEMPO DE EXPIRACION DEL TOKEN
    }),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
