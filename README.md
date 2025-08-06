# Actas Compromisos - Proyecto Fullstack

Este repositorio contiene el frontend (React) y el backend (Django) para la gestión de actas y compromisos.

---

## Instalación y ejecución

### Backend (Django)

1. Ve a la carpeta `backend`:
   ```
   cd actas/backend
   ```

2. Instala dependencias:
   ```
   pip install -r requirements.txt
   ```

3. Aplica migraciones:
   ```
   python manage.py migrate
   ```

4. Inicia el servidor:
   ```
   python manage.py runserver
   ```

El backend estará disponible en [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

### Frontend (React)

1. Ve a la carpeta `frontend`:
   ```
   cd actas/frontend
   ```

2. Instala dependencias:
   ```
   npm install
   ```

3. Inicia la app:
   ```
   npm start
   ```

El frontend estará disponible en [http://localhost:3000](http://localhost:3000)

---

# Base de datos

- Por defecto se usa SQLite3 (`db.sqlite3`).
- Puedes visualizar y editar la base con extensiones como **SQLite Viewer** en VS Code.

---

#   (frontend)

- `npm start` - Ejecuta la app en modo desarrollo.
App.


# Nota

- El backend requiere autenticación JWT para acceder a la API y archivos protegidos.
- El frontend consume la API del backend y muestra las actas, compromisos y gestiones.
- Para crear usuarios, puedes usar el admin de Django o el shell.

---

# Base de datos

- Por defecto se usa SQLite3 (`db.sqlite3`).
- **Este archivo contiene toda la información del sistema:** usuarios, actas, compromisos y gestiones.
- Si tienes el archivo `db.sqlite3` en el proyecto, ya cuentas con todos los datos y no necesitas cargar seeders ni datos iniciales.
- Puedes visualizar y editar la base con extensiones como **SQLite Viewer** en VS Code.

---
