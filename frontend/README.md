# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Actas Compromisos - Proyecto Fullstack

Este repositorio contiene el **frontend** (React) y el **backend** (Django) para la gestión de actas y compromisos.

---

## Instalación y ejecución

### Backend (Django)

1. Ve a la carpeta `backend`:
   ```bash
   cd actas/backend
   ```

2. Instala dependencias:
   ```bash
   pip install -r requirements.txt
   ```

3. Aplica migraciones:
   ```bash
   python manage.py migrate
   ```

4. Inicia el servidor:
   ```bash
   python manage.py runserver
   ```

El backend estará disponible en [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

### Frontend (React)

1. Ve a la carpeta `frontend`:
   ```bash
   cd actas/frontend
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Inicia la app:
   ```bash
   npm start
   ```

El frontend estará disponible en [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Base de datos

- Por defecto se usa SQLite3 (`db.sqlite3`).
- Puedes visualizar y editar la base con extensiones como **SQLite Viewer** en VS Code.

---

## 📝 Scripts disponibles (frontend)

- `npm start` - Ejecuta la app en modo desarrollo.
App.


## 💡 Notas

- El backend requiere autenticación JWT para acceder a la API y archivos protegidos.
- El frontend consume la API del backend y muestra las actas, compromisos y gestiones.
- Para crear usuarios, puedes usar el admin de Django o el shell.

---

## 🗄️ Base de datos

- Por defecto se usa SQLite3 (`db.sqlite3`).
- **Este archivo contiene toda la información del sistema:** usuarios, actas, compromisos y gestiones.
- Si tienes el archivo `db.sqlite3` en el proyecto, ya cuentas con todos los datos y no necesitas cargar seeders ni datos iniciales.
- Puedes visualizar y editar la base con extensiones como **SQLite Viewer** en VS Code.

---