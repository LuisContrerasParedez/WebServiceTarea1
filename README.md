# 🚀 CRUD API - Web Service con NestJS + Prisma + PostgreSQL

Este proyecto es un Web Service desarrollado con [NestJS](https://nestjs.com/), utilizando [Prisma ORM](https://www.prisma.io/) para acceder a una base de datos PostgreSQL. Permite realizar operaciones CRUD sobre una tabla `usuario` y está desplegado en un entorno productivo gratuito (Render).

---

## 📌 Características

- CRUD sobre la entidad `Usuario`
- Conexión a base de datos PostgreSQL con Prisma
- Documentación Swagger (OpenAPI) disponible en producción
- Despliegue automático con Render
- Pruebas unitarias y E2E con Jest
- Variables de entorno con soporte `.env`

---

## 📁 Estructura del Proyecto
crud-api/
│
├── prisma/ # Esquema Prisma (schema.prisma)
├── src/
│ ├── usuario/ # Módulo Usuario (controlador, servicio, DTOs)
│ └── main.ts # Bootstrap de NestJS
├── test/ # Pruebas E2E
├── dist/ # Código compilado (después de build)
├── .env # Variables de entorno locales
├── package.json
├── README.md
├── tsconfig.json


---

## 🛠️ Instalación local

```bash
# Clona el repositorio
git clone https://github.com/LuisContrerasParedez/WebServiceTarea1.git
cd WebServiceTarea1

# Instala las dependencias
npm install

# Crea tu archivo de entorno
cp .env.example .env

# Ejecuta las migraciones y genera Prisma Client
npx prisma generate
npx prisma migrate dev --name init

# Ejecuta en modo desarrollo
npm run start:dev


Despliegue en producción

Este proyecto está desplegado en Render:
🔗 https://webservicetarea1.onrender.com

Documentación Swagger:
📘 https://webservicetarea1.onrender.com/api



🧪 Pruebas
Ejecuta pruebas unitarias:
npm run test

Pruebas End-to-End:
npm run test:e2e



📄 Licencia
Este proyecto es de uso académico para fines educativos.



👨‍💻 Autor
Luis Contreras
Repositorio: GitHub - WebServiceTarea1# control-de-versiones-II
