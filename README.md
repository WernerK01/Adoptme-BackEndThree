# Adoptme

BackEnd de un sistema para adoptar mascotas. Actualizado para la entrega final

- [Enlace para Docker Hub](https://hub.docker.com/repository/docker/wernerk01/app-adoptme-main/general)

---

## Instalación

### Opción 1: Instalación local

1. Asegúrate de tener Node.js instalado (versión 16 o superior).
2. Clona o descarga este repositorio.
3. Navega al directorio del proyecto.
4. Instala las dependencias: `npm install`
5. Crea un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias:
   ```
   MONGO_URL=mongodb://localhost:27017/adoptme
   PORT=3000
   ```
   (Ajusta MONGO_URL según tu configuración de MongoDB)
6. Para desarrollo: `npm run dev`
   Para producción: `npm start`
7. La aplicación estará disponible en `http://localhost:3000`
8. Documentación API en `http://localhost:3000/api-docs`
9. Para ejecutar los tests: `npm run test`

### Opción 2: Usando Docker

1. Asegúrate de tener Docker instalado.
2. Descarga la imagen desde Docker Hub: `docker pull wernerk01/app-adoptme-main`
3. Ejecuta el contenedor: `docker run -p 3000:3000 -e MONGO_URL=mongodb://tu-mongo-url wernerk01/app-adoptme-main`
4. La aplicación estará disponible en `http://localhost:3000`

## Contenido actual:

1. Para revisar las mascotas actuales: `http://localhost:<PORT>/api/pets`.
2. Para revisar los usuarios actualeS: `http://localhost:<PORT>/api/users`.
3. Para añadir datos 'fakes' o mocks: `http://localhost:<PORT>/api/mocks`.

Cada uno de ellos, tienen sus respectivos routes.

---

## Puntos de la entrega:

1. Crear un router llamado mocks.router.js que funcione bajo la ruta base /api/mocks.
2. Mover el endpoint “/mockingpets” (Desarrollado en el primer Desafío Entregable) dentro de este router.
3. Crear un módulo de Mocking para generar usuarios de acuerdo a un parámetro numérico. Dichos usuarios generados deberán tener las siguientes características:
   - En “password” debe tener la contraseña “coder123” encriptada.
   - “role” puede variar entre “user” y “admin”.
   - “pets” debe ir como array vacío.
4. Dentro del router mocks.router.js, utilizar este módulo en un endpoint GET llamado “/mockingusers”, y generar 50 usuarios con el mismo formato que entregaría una petición de Mongo.
5. Dentro del router mocks.router.js, desarrollar un endpoint POST llamado /generateData que reciba los parámetros numéricos “users” y “pets” para generar e insertar en la base de datos la cantidad de registros indicados.
6. Comprobar dichos registros insertados mediante los servicios GET de users y pets (ya viene por defecto en el Adoptme)
7. Desarrollar los tests funcionales para todos los endpoints del router “adoption.router.js”.
8. Desarrollar el Dockerfile para generar una imagen del proyecto.
9. Subir la imagen de Docker a Dockerhub y añadir en un ReadMe.md al proyecto que contenga el link de dicha imagen.
