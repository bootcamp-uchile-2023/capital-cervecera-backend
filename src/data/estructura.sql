DROP DATABASE IF EXISTS CAPITAL;
CREATE DATABASE CAPITAL;

USE CAPITAL;

CREATE TABLE region (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE comuna (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    region_id INT NOT NULL,
    FOREIGN KEY (region_id) REFERENCES region(id)
);

CREATE TABLE direccion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(255) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    depto_casa VARCHAR(50),
    comuna_id INT,
    FOREIGN KEY (comuna_id) REFERENCES comuna(id)
);

CREATE TABLE usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE casa_cervecera (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  resenia VARCHAR(100)
);

CREATE TABLE producto (
	id INT AUTO_INCREMENT PRIMARY KEY,
	casa_cervecera_id INT,
	tipo ENUM('Lager', 'Pilsner', 'Ale', 'Stout', 'Porter', 'Bock', 'Lambic', 'Hefeweizen'),
	grado_alcoholico VARCHAR(100),
	amargor_ibu VARCHAR(100),
	nombre_producto VARCHAR(100),
	precio_venta INT,
	precio_compra INT,
	is_recomendado BOOLEAN DEFAULT FALSE,
    url_imagen VARCHAR (255),
	FOREIGN KEY (casa_cervecera_id) REFERENCES casa_cervecera(id)
);

CREATE TABLE cliente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT not null,
  direccion_id INT not null,
  rut VARCHAR(12) not null,
  nombre VARCHAR(50) not null,
  esta_atento BOOLEAN default false,
  apellido_materno VARCHAR(50) not null,
  apellido_paterno VARCHAR(50) not null,
  url_imagen VARCHAR (255),
  FOREIGN KEY (usuario_id) REFERENCES usuario(id),
  FOREIGN KEY (direccion_id) REFERENCES direccion(id)
);

CREATE TABLE carrito (
	id INT AUTO_INCREMENT PRIMARY KEY,
	total INT,
	sub_total INT,
	cliente_id INT not null,
	estado ENUM('Vacio', 'Activo', 'Abandonado', 'Completado', 'Eliminado'),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

CREATE TABLE contacto (
	id INT AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(50) not null,
	telefono VARCHAR(50) not null,
	cliente_id INT,
	FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);



CREATE TABLE pack (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio_venta INT
);



CREATE TABLE `carrito_producto` (
  `carrito_id` INT,
  `producto_id` INT,
  PRIMARY KEY (`carrito_id`, `producto_id`)
);



CREATE TABLE `producto_pack` (
  `producto_id` INT,
  `pack_id` INT,
  PRIMARY KEY (`producto_id`, `pack_id`)
);

CREATE TABLE `cliente_producto` (
  `cliente_id` INT,
  `producto_id` INT,
  `estrellas` INT,
  PRIMARY KEY (`cliente_id`, `producto_id`)
);
INSERT INTO region (nombre) VALUES ('Región Metropolitana'), ('Región de Valparaíso'), ('Región del Biobío');

INSERT INTO comuna (nombre, region_id) VALUES
('Santiago', 1),
('Providencia', 1),
('Valparaíso', 2),
('Viña del Mar', 2),
('Concepción', 3),
('Talcahuano', 3);

INSERT INTO direccion (direccion, numero, depto_casa, comuna_id) VALUES
('Calle A', '123', '1A', 1),
('Calle B', '456', '2B', 2),
('Calle C', '789', NULL, 3);

INSERT INTO usuario (username, password) VALUES ('user1', 'password1'), ('user2', 'password2'), ('user3', 'password3');

INSERT INTO casa_cervecera (nombre, resenia) VALUES ('Cervecería A', 'Reseña de la Cervecería A'), ('Cervecería B', 'Reseña de la Cervecería B');

INSERT INTO producto (casa_cervecera_id, tipo, grado_alcoholico, amargor_ibu, nombre_producto, precio_venta, precio_compra, is_recomendado) VALUES
(1, 'Lager', '5%', '20', 'Producto 1', 1000, 800, 1),
(1, 'Ale', '7%', '30', 'Producto 2', 1200, 900, 0),
(2, 'Stout', '6%', '25', 'Producto 3', 1500, 1100, 1);

INSERT INTO cliente (usuario_id, direccion_id, rut, nombre, esta_atento, apellido_materno, apellido_paterno) VALUES
(1, 1, '12345678-9', 'Juan', 1, 'Pérez', 'González'),
(2, 2, '98765432-1', 'María', 0, 'López', 'Rodríguez');

INSERT INTO carrito (total, sub_total, cliente_id, estado) VALUES (0, 0, 1, 'Activo'), (0, 0, 2, 'Vacio');

INSERT INTO contacto (email, telefono, cliente_id) VALUES
('cliente1@gmail.com', '12345678', 1),
('cliente2@gmail.com', '98765432', 2);

INSERT INTO carrito_producto (carrito_id, producto_id ) VALUES (1, 1), (1, 2), (2, 3);

INSERT INTO pack (nombre, precio_venta) VALUES ('Pack 1', 2500), ('Pack 2', 3000);

INSERT INTO producto_pack (producto_id, pack_id) VALUES (1, 1), (2, 1), (3, 2);

INSERT INTO cliente_producto (cliente_id, producto_id,estrellas) VALUES (1, 1,2), (2, 2,1), (1, 2,2);




