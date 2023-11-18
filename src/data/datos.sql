INSERT INTO pack (nombre, estrellas, precio, imagen)
VALUES
  ('Pack Dia de la Madre', 4, 19099, 'https://ejemplo.com/imagen_packA.jpg'),
  ('Pack Dia del Padre', 5, 2099, 'https://ejemplo.com/imagen_packB.jpg'),
  ('Pack Halloween', 3, 14099, 'https://ejemplo.com/imagen_packC.jpg'),
  ('Pack Fiestas Patrias', 4, 21099, 'https://ejemplo.com/imagen_packD.jpg'),
  ('Pack Navideño', 5, 29099, 'https://ejemplo.com/imagen_packE.jpg');


INSERT INTO cliente (id, nombre, direccion, telefono, email, contrasena)
VALUES
  ('2dbf7c60-21d8-4a2f-a0b8-7df71e5b23c1', 'Juan Pérez', 'Calle Principal 123', '+56 9 12345678', 'juan.perez@example.com', 'contraseña123'),
  ('c9e78145-98fc-4c28-85c6-7a620f2df4aa', 'María González', 'Avenida Central 456', '+56 9 98765432', 'maria.gonzalez@example.com', 'claveSegura45'),
  ('146e93e7-39bf-4f06-9b8e-3f27c935a6b8', 'Carlos Rodríguez', 'Plaza Mayor 789', '+56 9 55555555', 'carlos.rodriguez@example.com', 'miPasswordSecreta'),
  ('a6fbc1b7-8f69-48f4-a5d4-13e8536ff1c2', 'Ana Silva', 'Calle de la Esperanza 987', '+56 9 22222222', 'ana.silva@example.com', 'contraseñaSuperFuerte'),
  ('fc3e48f9-90b5-4b3d-80c0-05a953a156c1', 'Luis Sánchez', 'Ruta Costera 654', '+56 9 11111111', 'luis.sanchez@example.com', 'segura123456');


INSERT INTO producto (casa_cervecera, tipo_de_cerveza, grado_alcoholico, amargor_ibu, nombre_producto, precio_venta)
VALUES
  ('Cerveceria del Sur', 'IPA', 6.5, 'alto', 'IPA Especial', 5099),
  ('Cerveceria Altamira', 'Stout', 7.2, 'medio', 'Stout Oscuro', 6049),
  ('Cerveceria Puente Alto', 'Pale Ale', 5.0, 'bajo', 'Pale Ale Suave', 4099),
  ('Cerveceria Elpuerto', 'Pilsner', 4.8, 'bajo', 'Pilsner Refrescante', 4079),
  ('Cerveceria Kross', 'Wheat Beer', 5.4, 'medio', 'Wheat Beer Suave', 5029);

  INSERT INTO carrito_de_compra (total, sub_total, estado,id_cliente)
VALUES
  (50000, 45000, 'En Proceso','2dbf7c60-21d8-4a2f-a0b8-7df71e5b23c1'),
  (75050, 70000, 'En Proceso','2dbf7c60-21d8-4a2f-a0b8-7df71e5b23c1'),
  (30025, 28000, 'En Espera de Pago', '146e93e7-39bf-4f06-9b8e-3f27c935a6b8'),
  (120075, 115000, 'Completado','a6fbc1b7-8f69-48f4-a5d4-13e8536ff1c2'),
  (60000, 55000, 'En Proceso', '2dbf7c60-21d8-4a2f-a0b8-7df71e5b23c1');

  INSERT INTO producto_por_pack (id_producto, id_pack)
VALUES
(1, 1),
(2, 1),
(3, 4),
(3, 3),
(5, 4),
(5, 3);

INSERT INTO promocion ( descuento, id_producto)
VALUES
(15,1),
(30,2),
(5,3),
(5,4),
(10,5);

INSERT INTO venta ( id_carrito_de_compra, id_pack, id_producto,id_promocion)
VALUES
(1,null,null, 1),
(2,1,null,null),
(3,null,2,null),
(4,null,null,2),
(5,2,null,null);

INSERT INTO recomendacion (estrellas, id_cliente,id_producto)
VALUES
(2,'146e93e7-39bf-4f06-9b8e-3f27c935a6b8',1),
(4,'2dbf7c60-21d8-4a2f-a0b8-7df71e5b23c1',2),
(3,'2dbf7c60-21d8-4a2f-a0b8-7df71e5b23c1',3),
(5,'2dbf7c60-21d8-4a2f-a0b8-7df71e5b23c1',4),
(1,'a6fbc1b7-8f69-48f4-a5d4-13e8536ff1c2',5);