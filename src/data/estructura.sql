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
    direccion VARCHAR(255) ,
    depto_casa VARCHAR(255),
    comuna_id INT,
    FOREIGN KEY (comuna_id) REFERENCES comuna(id)
);

CREATE TABLE usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  isAdmin BOOLEAN DEFAULT FALSE
);

CREATE TABLE casa_cervecera (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50)
);

CREATE TABLE producto (
	id INT AUTO_INCREMENT PRIMARY KEY,
	casa_cervecera_id INT,
	tipo ENUM('Lager', 'Experimentales', 'Pale Ale', 'Stout', 'IPA'),
	grado_alcoholico VARCHAR(255),
	amargor_ibu VARCHAR(255),
	nombre_producto VARCHAR(255),
	precio_venta INT,
	is_recomendado BOOLEAN DEFAULT FALSE,
  base64_imagen_card LONGTEXT,
  base64_imagen_detalle LONGTEXT,
  is_promo boolean,
  volumen_cc INT,
  detalle TEXT,
  stock INT,
  precio_descuento INT,
  sku VARCHAR(255),
	FOREIGN KEY (casa_cervecera_id) REFERENCES casa_cervecera(id)
);

CREATE TABLE contacto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT ,
  direccion_id INT ,
  rut VARCHAR(12) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  esta_atento BOOLEAN DEFAULT FALSE,
  email VARCHAR(255),
  telefono VARCHAR(255),
  apellido_materno VARCHAR(255),
  apellido_paterno VARCHAR(255) ,
  base64_imagen LONGTEXT,
  is_novedades BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id),
  FOREIGN KEY (direccion_id) REFERENCES direccion(id)
);


CREATE TABLE venta (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(255) NOT NULL,
  monto INT,
  forma_pago VARCHAR(255),
  total INT
  );

CREATE TABLE carrito (
	id INT AUTO_INCREMENT PRIMARY KEY,
    venta_id INT NOT NULL,
	contacto_id INT NOT NULL,
	estado ENUM('Vacio', 'Activo', 'Abandonado', 'Completado', 'Eliminado'),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (contacto_id) REFERENCES contacto(id),
    FOREIGN KEY (venta_id) REFERENCES venta(id)
);



CREATE TABLE pack (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
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

CREATE TABLE `contacto_producto` (
  `contacto_id` INT,
  `producto_id` INT,
  `estrellas` INT,
  PRIMARY KEY (`contacto_id`, `producto_id`)
);

INSERT INTO region (nombre) VALUES ('Región Metropolitana'), ('Región de Valparaíso'), ('Región del Biobío');

INSERT INTO comuna (nombre, region_id) VALUES
('Santiago', 1),
('Providencia', 1),
('Valparaíso', 2),
('Viña del Mar', 2),
('Concepción', 3),
('Talcahuano', 3);

INSERT INTO direccion (direccion,  depto_casa, comuna_id) VALUES
('Calle A', '1A', 1),
('Calle B', '2B', 2),
('Calle C', NULL, 3);

INSERT INTO usuario (username, password, isAdmin) VALUES ('Cris', '29e823e2fc4491934dafe0a9e2ec95f0',true), ('Lucho', '29e823e2fc4491934dafe0a9e2ec95f0',true), ('TurboAle', '29e823e2fc4491934dafe0a9e2ec95f0',false);

INSERT INTO casa_cervecera (nombre) VALUES ('Totem'), ('Nothus'),('Mad Charlies'),('Bundor'),('Nebu');

INSERT INTO producto (sku,nombre_producto,casa_cervecera_id, tipo,volumen_cc, amargor_ibu, grado_alcoholico, precio_venta, precio_descuento, is_promo, is_recomendado,stock,detalle) VALUES
('STO-PORT-750-001','IPL INDIA PALE ALE',1,'Pale Ale',473,'Medio',"7,0% ABV",3000,2800,false,false,1,"India Pale Ale es una versión innovadora y mejorada de la clásica IPA moderna. Combina todas las características de una IPA, como la intensa carga de lúpulos, pero está fermentada con levadura lager. Esta técnica mejora su tomabilidad y suaviza la percepción de sus 7 grados de alcohol. Refrescante y aromática, esta cerveza se elabora con los mejores lúpulos americanos del mercado, marcando un nuevo estándar en la evolución de las IPAs."),
('STO-PORT-750-002','APA American Pale Ale',1,'Pale Ale',473,'Medio',"5,2% ABV",3000,2800,false,true,1,"La Totem APA o American Pale Ale es una cerveza histórica de la casa cervecera. Se presenta en un atractivo color dorado, ofrece un nivel de amargor medio, perfectamente complementado con sabores que evocan frutas tropicales. Su aroma, de intensidad media, trae a la mente notas frescas de maracuyá y mango, creando una experiencia equilibrada y deliciosamente aromática."),
('STO-PORT-750-003','Oatmeal Stout',2,'Stout',470,'Medio',"5,6% ABV",3300,3100,true,false,1,"Un homenaje al perruno compañero que acompaña a los cerveceros de Nothus en sus locuras. Una cerveza de tipo Stout con avena y elegantes toques de café, chocolate y almendras. Muy cremosa, oscura y con tremendo cuerpazo."),
('STO-PORT-750-004','Lenga',2,'Lager',470,'Medio',"3,8% ABV",3300,3100,false,false,1,"Esta cerveza especial es el resultado de una colaboración única entre la Universidad Austral de Chile (UACh) y los cerveceros valdivianos. Se destaca por su fermentación con levadura nativa tipo eubayanus, extraída directamente del bosque patagónico. Este elemento distintivo aporta un carácter único a la cerveza, reflejando la riqueza natural de la Patagonia y la innovación en la elaboración cervecera."),
('STO-PORT-750-005','Hoppy Lager',2,'Lager',470,'Medio',"6,3% ABV",3300,3100,true,false,1,"La Hoppy Lager de 2 tiene el espíritu neozelandés gracias a sus intensos lúpulos, una aventura tropical y cítrica. Ideal para compartir una tarde de calor y locura. "),
('STO-PORT-750-06','Hazy Pale Ale',2,'Experimentales',470,'Medio',"5,8% ABV",3300,3100,false,true,1,"Sumérgete en la experiencia de un Hazy Pale Ale, una maravilla nebulosa en el mundo de la cerveza. Su receta única, cargada de avena, le otorga una textura turbia y un cuerpo sedoso. Cada sorbo te transporta a un huerto de frutas frescas, con notas pronunciadas de lúpulo que evocan el jugo de frutas recién exprimidas. La magia continúa al desvelar matices exóticos de coco y piña, creando una fiesta tropical en tu paladar. Esta cerveza no es solo una bebida, es un viaje sensorial que combina la frescura del lúpulo y la riqueza de sabores tropicales."),
('STO-PORT-750-007','Darwin American IPA',2,'IPA',470,'Alto',"6,3% ABV",3300,3100,false,true,1,"Explora la esencia de ""Darwin"", una American IPA que redefine el amargor con elegancia. Esta cerveza es una sinfonía de tres lúpulos distintivos: Mosaic, Centennial y Columbus. Cada uno aporta su propia personalidad, creando un mosaico de aromas y sabores. Prepárate para ser cautivado por un torbellino de notas cítricas, un toque de frutas maduras y un final sutilmente resinoso. ""Darwin"" no es solo una cerveza, es un homenaje a la audacia y la complejidad del lúpulo, invitándote a un viaje de descubrimiento en cada sorbo."),
('STO-PORT-750-008','Amanita Irish Red Ale',2,'Pale Ale',470,'Bajo',"5,5% ABV",3300,3100,false,true,1,"Embárcate en el deleite de la ""Amanita Irish Red Ale"", una cerveza que encarna la elegancia en la simplicidad. Su apariencia es una invitación visual, presentando tonos ámbar que se inclinan hacia un encantador rojo cobrizo. Cada sorbo es un abrazo de sabores cálidos y reconfortantes, donde la malta caramelo se entrelaza con un carácter ligeramente tostado. Este equilibrio perfecto entre dulzura y tostado crea una experiencia sensorial única, convirtiendo a la ""Amanita Irish Red Ale"" en la compañera ideal para momentos relajados y conversaciones amenas."),
('STO-PORT-750-009','Meli Ambar',5,'Pale Ale',330,'Bajo',"5,1% ABV",2800,2600,false,true,1,"Imagina una cerveza que captura la esencia de un paseo por el bosque valdiviano. Su color ámbar es el reflejo de un atardecer dorado, prometiendo una experiencia única. Al primer sorbo, te saluda un sabor afrutado, una fusión del dulzor jugoso de la mandarina y el toque exótico de la murtilla. El aroma acompaña este viaje sensorial, equilibrando lo dulce y lo cítrico con un toque floral, enriquecido con notas distintivas de Melí natural.“Melí”, este árbol se considera como típico del “bosque valdiviano”, y crece en sitios húmedos y sombríos."),
('STO-PORT-750-0010','West Coast Ipa',3,'IPA',473,'Medio',"6,2% ABV",3500,3300,true,false,1,"Esta IPA, la favorita de muchos, brilla con lúpulos californianos. Es una cerveza ligera, fiel a su estilo con un amargor distintivo. Su aroma frutal, cortesía del lúpulo, se hace notar desde el primer momento en que la sostienes, prometiendo una experiencia refrescante y memorable."),
('STO-PORT-750-0011','Weissbier',3,'Experimentales',473,'Bajo',"4,5% ABV",3500,3300,false,false,1,"Las Weissbier son cervezas de estilo ale o alta fermentación, que se elaboran con una alta cantidad de maltas de trigo. Más conocidas como cervezas de trigo, son la alternativa perfecta para disfrutar durante las temperaturas suaves de final del verano."),
('STO-PORT-750-0012','Mazapan',3,'Stout',473,'Medio',"8,2% ABV ",4000,3800,false,false,1,"Una cerveza de Imperial Stout con toques del sublime mazapán de Confitería Sur, con una generosa espuma beige y unas notas a chocolate, malta tostada y café. ¡Sin duda una experiencia de sabores! "),
('STO-PORT-750-0013','Hazy Ipa',3,'IPA',473,'Bajo',"6,2% ABV",4000,3800,false,false,1,"Esta cerveza se presenta con una apariencia brumosa y opaca de tono amarillo. Ofrece un cuerpo suave y una textura sedosa en boca, destacando por un perfil de frutas tropicales que le otorgan un carácter ""jugoso"". En aroma, el lúpulo es protagonista, seguido por notas sutiles de malta. El sabor sigue esta línea, con un lúpulo pronunciado que refleja las mismas características aromáticas."),
('STO-PORT-750-0014','Ninfa',4,'Pale Ale',330,'Bajo',"6,0% ABV",3000,2700,true,false,1,"Esta cerveza de estilo Irish Red Ale se caracteriza por su profundo color ámbar. Su aroma a caramelo y toffe es invitante, mientras que en boca ofrece una textura media con un sutil y equilibrado amargor. El retrogusto es moderado y dulce, haciendo de esta cerveza una opción amigable y accesible, ideal para iniciar un recorrido por la gama de cervezas Bundor."),
('STO-PORT-750-0015','Nessie',4,'Experimentales',330,'Bajo',"8,0% ABV",3000,2700,false,false,1,"Esta cerveza de estilo Wee Heavy se distingue por su intenso color marrón rubí. Ofrece un aroma cautivador que combina toffe, toques ahumados y matices de chocolate. En boca, se siente un cuerpo pleno con una ligera sensación alcohólica. Su retrogusto es corto pero complejo, evocando frutos secos. Esta cerveza, de complejidad media, es ideal para aquellos que buscan una bebida con mayor contenido alcohólico.");


INSERT INTO contacto (usuario_id, direccion_id, rut, nombre, esta_atento, email, apellido_materno, apellido_paterno,is_novedades,telefono) VALUES
(1, 1, '12345678-9', 'Cristian', 1,'cr.lizamal@gmail.com', 'Lizama', 'Lavin',true,'+56984790175'),
(2, 2, '98765432-1', 'Luis', 0,'luis@gmail.com', 'Acevedo', 'Acevedo',false,'+56984790176'),
(3, 3, '18021591-3', 'Alejandra', 1,'ale@gmail.com', 'Acevedo', 'Acevedo',true,'+56984790177');

INSERT INTO venta (tipo,monto,forma_pago, total) VALUES ('normal', 2000  ,'webpay', 2000), ('express', 3000, 'mercadopago', 3000);

INSERT INTO carrito (contacto_id, estado,venta_id) VALUES ( 1, 'Activo',1), (2, 'Vacio',2);

INSERT INTO carrito_producto (carrito_id, producto_id ) VALUES (1, 1), (1, 2), (2, 3);

INSERT INTO pack (nombre, precio_venta) VALUES ('Pack 1', 2500), ('Pack 2', 3000);

INSERT INTO producto_pack (producto_id, pack_id) VALUES (1, 1), (2, 1), (3, 2);

INSERT INTO contacto_producto (contacto_id, producto_id,estrellas) VALUES (1, 1,2), (2, 2,1), (1, 2,2);




