export class CarritoCompraDto {
  readonly carrito_id: string;
  readonly productos: Array<{
    id_producto: string;
    nombre: string;
    cantidad: number;
    precio_unitario: number;
  }>;
  readonly contacto: {
    nombre: string;
    email: string;
    telefono: string;
  };
  readonly envio: {
    direccion: {
      calle: string;
      numero: string;
      ciudad: string;
      region: string;
    };
    metodo_envio: {
      id: string;
      nombre: string;
    };
  };
  readonly total_antes_descuentos: number;
  readonly promocion: {
    id_promocion: string;
    descripcion: string;
  };
  readonly descuento: number;
  readonly total_despues_descuento: number;
  readonly fecha_venta: string;
}

// Crear una instancia de la clase CarritoCompraDto sin argumentos
const carritoCompra = new CarritoCompraDto();
carritoCompra.carrito_id = "12345";
carritoCompra.productos = [
  {
    id_producto: "001",
    nombre: "artista artesanal para la ale",
    cantidad: 6,
    precio_unitario: 10.0,
  },
  {
    id_producto: "002",
    nombre: "artpop de cervezeria",
    cantidad: 10,
    precio_unitario: 15.0,
  },
];
carritoCompra.contacto = {
  nombre: "Jano welson",
  email: "jano.welson@hotmail.com",
  telefono: "+56912345678",
};
carritoCompra.envio = {
  direccion: {
    calle: "santa julia",
    numero: "123",
    ciudad: "Santiago",
    region: "Región Metropolitana",
  },
  metodo_envio: {
    id: "ENV1",
    nombre: "Envío estándar",
  },
};
carritoCompra.total_antes_descuentos = 35.0;
carritoCompra.promocion = {
  id_promocion: "PROMO10",
  descripcion: "10% de descuento",
};
carritoCompra.descuento = 3.5;
carritoCompra.total_despues_descuento = 31.5;
carritoCompra.fecha_venta = "2023-10-08T11:12:55Z";

{::{usuario_id}/carrito/venta

request-body:
{
    "carrito_id": "12345",
    "fecha": "2023-10-08T11:12:55Z"
}

response:
{}
}

{::/formas_pago
[
    {
        "id": "FP1",
        "nombre": "Tarjeta de crédito"
    },
    {
        "id": "FP2",
        "nombre": "Tarjeta de débito"
    },
    {
        "id": "FP3",
        "nombre": "PayPal"
    },
    {
        "id": "FP4",
        "nombre": "Transferencia bancaria"
    }
]}

{::{usuario_id}/carrito/detalle_envio

{
    "nombre": "Jano",
    "apellido": "welson",
    "email": "jano.welson@hotmail.com",
    "tipos_envio": [
        {
            "id": "ENV1",
            "nombre": "Envío estándar",
            "costo": 5.99
        },
        {
            "id": "ENV2",
            "nombre": "Envío exprés",
            "costo": 9.99
        },
        {
            "id": "ENV3",
            "nombre": "Recogida en tienda",
            "costo": 0.00
        }
    ]
}}
{::{usuario_id}/carrito/contacto (POST)

Request-body:
{
    "email": "ejemplo@dominio.com",
    "quiero_promo": true,
    "nombre": "Jano",
    "rut": "12345678-9",
    "apellidos": "welson ",
    "telefono": "+56912345678",
    "region": "Región Metropolitana",
    "comuna": "Santiago",
    "direccion": "Calle Ejemplo",
    "num_direccion": "123",
    "num_departamento": "45A"
}
Response:
{}
}
{::/regiones
[
    {
      "id": "RAP",
      "nombre": "Región de Arica y Parinacota"
    },
    {
      "id": "RT",
      "nombre": "Región de Tarapacá"
    },
    {
      "id": "RA",
      "nombre": "Región de Antofagasta"
    },
    ...
]
}
{::/{region_id}/comunas
[
    {
      "id": "A",
      "nombre": "Ancud",
      "provincia": "Chiloé"
    },
    {
      "id": "C",
      "nombre": "Castro",
      "provincia": "Chiloé"
    },
    {
      "id": "C",
      "nombre": "Chonchi",
      "provincia": "Chiloé"
    },
    ...
]}
{
  ::{usuario_id}/carrito/calculo/envio
Request-body
{
    "carrito_id": "KKKJLKJM65465465"
    "direccion_envio": {
        "calle": "Calle Ejemplo",
        "numero": "123",
        "comuna": "Santiago",
        "region": "Región Metropolitana",
        "departamento": "86"
    },
    "total": "10.00"
}
Response
{
    "carrito_id": "KKKJLKJM65465465"
    "direccion_envio": {
        "calle": "Calle Ejemplo",
        "numero": "123",
        "comuna": "Santiago",
        "region": "Región Metropolitana",
        "departamento": "86"
    },
    "costo_envio": 5.99,
    "total": 15.99
}
}
{::{usuario_id}/carrito/productos
[
    {
        "imagen_url": "http://ejemplo.com/imagen1.jpg",
        "nombre": "Producto 1",
        "precio": 10.0,
        "unidades": 2,
        "total": 20.0
    },
    {
        "imagen_url": "http://ejemplo.com/imagen2.jpg",
        "nombre": "Producto 2",
        "precio": 15.0,
        "unidades": 1,
        "total": 15.0
    },
    {
        "imagen_url": "http://ejemplo.com/imagen3.jpg",
        "nombre": "Producto 3",
        "precio": 7.0,
        "unidades": 5,
        "total": 35.0
    }
]}
::{usuario_id}/carrito/relacionados
[
  {
    "id_producto": "001",
    "nombre": "Cerveza Artesanal IPA",
    "descripcion": "Una cerveza lupulada y refrescante.",
    "precio": 5.99,
    "imagen_url": "http://ejemplo.com/cerveza1.jpg"
  },
  {
    "id_producto": "002",
    "nombre": "Cerveza Lager Premium",
    "descripcion": "Una cerveza suave y ligera.",
    "precio": 4.99,
    "imagen_url": "http://ejemplo.com/cerveza2.jpg"
  },
  {
    "id_producto": "003",
    "nombre": "Cerveza Stout Robusta",
    "descripcion": "Una cerveza oscura y robusta.",
    "precio": 6.99,
    "imagen_url": "http://ejemplo.com/cerveza3.jpg"
  }
]
::{usuario_id}/carrito/promocion (POST)

Request-body:
{
    "carro_id": "12345",
    "total": 100.0,
    "cupon": "DESCUENTO10"
}
Response:
{
    "carro_id": "12345",
    "total_antes": 100.0,
    "descuento": 10.0,
    "total_nuevo": 90.0
}