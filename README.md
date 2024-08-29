# Proyecto de Gestión de Ligas y Equipos

Este proyecto es una API RESTful para gestionar ligas y equipos. Incluye autenticación de usuarios, roles de administrador, y operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para equipos y ligas.

## Requisitos

- Node.js v14 o superior
- MongoDB

## Instalación

1. Clona el repositorio:
   ```bash
    git clone https://github.com/tu_usuario/tu_proyecto.git

2. Accede al directorio del proyecto:

       cd tu_proyecto

3. Instala las dependencias:

       npm install

5. Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

       DB_URL=mongodb+srv://proyecto7:5Znk6o8EInnnEUg8@cluster0.2pbyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
        JWT_SECRET=ve1vb05s0bs2bs0b16dfa

6. Inicia el servidor:

       npm start

El servidor se iniciará en "http://localhost:3000".


Estructura del Proyecto

src/: Carpeta principal del código fuente.
api/: Contiene los controladores, modelos, y rutas.
config/: Contiene la configuración de la base de datos y JWT.
middlewares/: Contiene los middlewares de autenticación y autorización.


Endpoints

Usuarios
POST /api/v1/users/register: Registro de un nuevo usuario.
    
    Request body: { "Name": "nombre_usuario", "password": "contraseña" }

POST /api/v1/users/login: Inicio de sesión de un usuario.
    
    Request body: { "Name": "nombre_usuario", "password": "contraseña" }
    Response: { "user": { ... }, "token": "jwt_token" }
    
GET /api/v1/users/: Obtener todos los usuarios (solo para administradores).

Ligas

    GET /api/v1/liga/: Obtener todas las ligas.

    GET /api/v1/liga/
    : Obtener una liga por su ID.

    POST /api/v1/liga/: Crear una nueva liga (solo administradores).

    Request body: { "name": "nombre_liga", "image": "url_imagen", "equipos": [id_equipos] }
    PUT /api/v1/liga/
    : Actualizar una liga existente (solo administradores).

    Request body: { "name": "nuevo_nombre_liga", "image": "nueva_url_imagen", "equipos": [id_equipos] }
    DELETE /api/v1/liga/
    : Eliminar una liga (solo administradores).

Equipos


    GET /api/v1/equipos/: Obtener todos los equipos.

    GET /api/v1/equipos/
    : Obtener un equipo por su ID.

    GET /api/v1/equipos/ranking/
    : Obtener equipos por ranking.

    POST /api/v1/equipos/: Crear un nuevo equipo (autenticado).

    Request body: { "name": "nombre_equipo", "image": "url_imagen", "Ranking": numero_ranking }
    PUT /api/v1/equipos/
    : Actualizar un equipo existente (solo administradores).

    Request body: { "name": "nuevo_nombre_equipo", "image": "nueva_url_imagen", "Ranking": nuevo_numero_ranking }
    DELETE /api/v1/equipos/
    : Eliminar un equipo (solo administradores).


Middleware de Autenticación y Autorización

    Auth: Middleware que verifica si el usuario está autenticado.
    Administrador: Middleware que verifica si el usuario tiene el rol de administrador.


Contribución

    Las contribuciones son bienvenidas. Puedes hacerlo creando issues y pull requests en el repositorio.


Licencia

    Este proyecto está licenciado bajo la MIT License.
