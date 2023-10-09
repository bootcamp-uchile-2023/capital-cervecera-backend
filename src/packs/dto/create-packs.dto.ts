import { ApiProperty } from '@nestjs/swagger';

export class CreatePacksDto {
  @ApiProperty()
  readonly packs: string;
}muralla 3d WALL PANEL TIPO MADERA
::/packs

[
    {pack_1},
    {pack_2},
    {pack_3},
    {pack_4},
    {pack_n},
]

Donde cada pack, estartaría definido de la siguiente manera:
{
    "nombre": "Pack Ejemplo",
    "estrellas": 4.5,
    "precio": "$199.99",
    "imagen_url": "https://ejemplo.com/imagen.jpg",
    "casa_cervecera": "Cervecería Ejemplo",
    "productos": [
        {
            "nombre": "Subproducto 1",
            ...
        },
        {
            "nombre": "Subproducto 2",
            ...
        }
    ]
}
::/packs
[
    {pack_1},
    {pack_n},
]
response:
::/packs

{
    "id_pack": "123e4567-e89b-12d3-a456-426614174000",
    "nombre": "Pack Ejemplo",
    "estrellas": 4.5,
    "precio": "$199.99",
    "imagen_url": "https://ejemplo.com/imagen.jpg",
    "casa_cervecera": "Cervecería Ejemplo",
    "productos": [
        {
            "nombre": "Subproducto 1",
            ...
        },
        {
            "nombre": "Subproducto 2",
            ...
        }
    ]
}