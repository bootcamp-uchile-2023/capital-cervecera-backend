export class UsuarioDto {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly password: number;
  //carrito
}
::{usuario_id}/carrito/venta

request-body:
{
    "carrito_id": "12345",
    "fecha": "2023-10-08T11:12:55Z"
}

response:
{}
::{usuario_id}/carrito/contacto (POST)

Request-body:
{
    "email": "ejemplo@dominio.com",
    "quiero_promo": true,
    "nombre": "Juan",
    "rut": "12345678-9",
    "apellidos": "Pérez Soto",
    "telefono": "+56912345678",
    "region": "Región Metropolitana",
    "comuna": "Santiago",
    "direccion": "Calle Ejemplo",
    "num_direccion": "123",
    "num_departamento": "45A"
}
Response:
{}