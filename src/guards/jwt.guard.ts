import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JWTGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['autorizacion']; // tiene que ir con minuscula por que el request lo que llegue lo transforma en miniscula

    if (!token) {
      //si viene en blanco
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'capitalcervecera1234',
      });
      request['CURRENT_USER'] = payload; // SE ASIGNA EL OBJETO DENTRO DEL REQUEST
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException();
    }

    return true;
  }
}
