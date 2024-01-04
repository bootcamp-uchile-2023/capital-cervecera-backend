import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JWTGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );

    const request = context.switchToHttp().getRequest();
    const token = request.headers['autorizacion']; // tiene que ir con minuscula por que el request lo que llegue lo transforma en miniscula

    if (token) {
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: process.env.JWT_SECRET,
        });
        request['CURRENT_USER'] = payload; // SE ASIGNA EL OBJETO DENTRO DEL REQUEST
      } catch (e) {
        throw new UnauthorizedException();
      }
    }

    if (isPublic) return true;

    if (!token) {
      //si viene en blanco
      throw new UnauthorizedException();
    }

    return true;
  }
}
