# Tablero colaborativo- API

## Description

Tablero colaborativo creado utilizando el framework [NestJS](https://github.com/nestjs/nest)

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Herramientas externas utilizadas

- **Mongoose**: ODM para MongoDB, facilita la definición de esquemas y la interacción con la base de datos.
- **class-validator**: Validación declarativa de DTOs y objetos, asegurando la integridad de los datos recibidos en la API.
- **Socket.io**: Comunicación en tiempo real entre el servidor y los clientes, permitiendo la colaboración instantánea en el tablero.

---

## Variables de entorno

- **PORT**: Puerto en el que se ejecuta el servidor (por defecto, 3000).
- **FRONTEND_URL**: URL permitida para CORS, debe apuntar al frontend (por ejemplo, `http://localhost:5173`).
- **DATABASE_URL**: Cadena de conexión a MongoDB (por ejemplo, `mongodb://localhost:27017/kanban` o una URI de MongoDB Atlas).

