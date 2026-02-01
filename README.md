# Adoptme

BackEnd de un sistema para adoptar mascotas. Primera entrega formal.

---

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
