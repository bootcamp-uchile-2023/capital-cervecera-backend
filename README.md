

# E-Commerce Capital Cervecera.


![logo-capital-cervecera (2)](https://github.com/bootcamp-uchile-2023/capital-cervecera-backend/assets/141187853/7b8d9ae9-6405-421e-87d4-3077e84f20ac)








#### Api REST de venta de cerveza artesanal, donde se puede comprar, comentar y recomendar productos, entre otros.  

## 🛠️ Stack

- [**Nest.js**](https://nestjs.com/) - Framework backend.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript con sintaxis para los tipos.
- [**Docker**](https://www.docker.com/products/docker-desktop/) - Creación de contenedores e imagenes.
- [**MySQL**](https://www.mysql.com/products/workbench/) - Herramienta visual de diseño, desarrollo y administración de bases de datos MySQL.

## 🚀 Para empezar

1. Iniciar Docker.

```bash
docker run --hostname=4d1d4f6f1c9b --env=MYSQL_ROOT_PASSWORD=password --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=GOSU_VERSION=1.16 --env=MYSQL_MAJOR=innovation --env=MYSQL_VERSION=8.1.0-1.el8 --env=MYSQL_SHELL_VERSION=8.0.34-1.el8 --volume=/var/lib/mysql -p 33060:3306 --restart=no --runtime=runc -d mysql
```

2. mySQL Workbench.

```bash
-Conectarse al puerto 33060
-Ejecutar la estructura.sql que se encuentra en la ruta src/data/estructura.sql. ( contiene tabla, relaciones y seeds basicos).
```
   
3. [Fork]() o clonar este repository.

```bash
git clone git@github.com:bootcamp-uchile-2023/capital-cervecera-backend.git
```

4. Instalar las dependencias:

```bash
# Instalar yarn globalmente en caso de que no lo tengas:
npm install -g yarn

# Instalar dependencias:
yarn install


```

5. Correr area de desarrollo:

```bash

# Run with yarn:
yarn start:dev
```

6. Abre [**http://localhost:3000**](http://localhost:3000/) con tu navegador para ver los resultados 🚀


## 🧞 Commands

|     | Command          | Action                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev` or `start` | Starts local dev server at `localhost:3000`.  |
| ⚙️  | `build`          | Build your production site to `./dist/`.      |
| ⚙️  | `preview`        | Preview your build locally, before deploying. |



7. - Ejemplo de POST de  LOGIN.
   
![image](https://github.com/bootcamp-uchile-2023/capital-cervecera-backend/assets/141187853/3ec40785-cd2d-4eae-87f2-c08f5fa820f7)


  - Ejemplo de GET de Productos

![image](https://github.com/bootcamp-uchile-2023/capital-cervecera-backend/assets/141187853/f6c2b197-a0ab-4094-a3de-f7155eeaf6f1)






## ✅ Por hacer...

- [ ] Terminar servicios en algunos endpoints


## License

Nest is [MIT licensed](LICENSE).
