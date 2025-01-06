# Proyecto de Conceptos Básicos de NestJS 🛠️📘

Este proyecto es una introducción a los conceptos básicos de NestJS, enfocado en la creación y uso de controladores, DTOs (Data Transfer Objects) y los métodos HTTP (GET, POST, PUT, DELETE). Se desarrolló un controlador llamado `TaskController` como ejemplo práctico.

## Características 📌

- **Controladores y Rutas:** Implementación de un controlador llamado `TaskController` para gestionar tareas.
- **Métodos CRUD:** Soporte para operaciones de creación, lectura, actualización y eliminación de tareas (POST, GET, PUT, DELETE).
- **DTOs:** Uso de DTOs para validar y estructurar datos de entrada.
- **Estructura Modular:** Estructura básica del proyecto para facilitar la escalabilidad.
- **MongoDB:** Base de datos NoSQL utilizada para almacenar las tareas.
- **Visualización y Creación de Tareas:** Permite visualizar tareas existentes y crear nuevas tareas mediante métodos HTTP.

## Tecnologías 🔨

- **NestJS:** Framework para aplicaciones Node.js con soporte TypeScript.
- **Node.js:** Entorno de ejecución para JavaScript.
- **TypeScript:** Lenguaje que mejora JavaScript con tipado estático.
- **MongoDB:** Base de datos NoSQL utilizada para el almacenamiento de datos.

## Instalación ⚙️

1. **Clona el repositorio:**

   ```bash
   git clone [<url-del-repositorio>](https://github.com/felipejrz/nestjs-curse.git)
   ```

2. **Instala las dependencias del proyecto:**

   ```bash
   npm install
   ```

3. **Configura la conexión a MongoDB:**

   Asegúrate de tener una instancia de MongoDB en ejecución y configura la URI en el archivo de entorno `.env`:

   ```env
   MONGODB_URI=mongodb://localhost:27017/nest-tasks
   ```

4. **Inicia el servidor de desarrollo:**

   ```bash
   npm run start:dev
   ```

5. **Accede a la aplicación en tu navegador:**

   La aplicación se ejecutará en [http://localhost:3000](http://localhost:3000).

## Uso 📂

- **Página Principal:** El proyecto muestra una lista de tareas inicial.
- **Crear Tareas:** Usa el método POST para añadir nuevas tareas.
- **Visualizar Tareas:** Usa el método GET para obtener y visualizar las tareas existentes.
- **Actualizar Tareas:** Usa el método PUT para actualizar tareas existentes.
- **Eliminar Tareas:** Usa el método DELETE para eliminar tareas.
- **Detalles de Tareas:** Accede a información detallada sobre cada tarea usando su ID.

## Aprendizajes 📖

Este proyecto cubre los siguientes conceptos:

- Creación de módulos y controladores en NestJS.
- Uso de DTOs para validar y estructurar datos.
- Implementación de los métodos HTTP (GET, POST, PUT, DELETE).
- Estructuración básica de un proyecto NestJS.
- Uso de MongoDB como base de datos para almacenamiento de información.

## Autor ✍️

- **Felipe Daniel** - [felipejrz](https://github.com/felipejrz)
