# 🌐 Aplicación Angular con Login y CRUD de Contactos

Este proyecto es una aplicación desarrollada en Angular que permite a los usuarios iniciar sesión mediante la validación contra una API REST. Una vez autenticados, los usuarios pueden acceder a una sección donde se gestiona un CRUD completo de contactos, utilizando otra API REST.

## 📝 Características

- **Login seguro:** Validación de credenciales mediante una API REST.
- **Gestión de contactos:**  
  - Crear nuevos contactos.  
  - Leer la lista de contactos existentes.  
  - Actualizar información de un contacto.  
  - Eliminar contactos.
- **Interfaz amigable y responsiva.**

## 🚀 Tecnologías utilizadas

- **Frontend:** Angular  
- **APIs REST:** Para el manejo de login y contactos  
- **Estilos:** CSS/SCSS (opcionalmente con Bootstrap o Angular Material, según sea el caso)

## ⚙️ Requisitos previos

Asegúrate de tener instalados los siguientes elementos antes de ejecutar el proyecto:

- **Node.js** (v16 o superior)  
- **Angular CLI** (v17 o superior): Puedes instalarlo con:
```bash
  npm install -g @angular/cli
```
## 🛠️ Instalación

### Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```
### Instala las dependencias del proyecto:

```bash
npm install
```

### Inicia el servidor de desarrollo:
```bash
ng serve
```

## 🧪 Uso

- Abre el navegador y accede a http://localhost:4200.
- Introduce tus credenciales en la pantalla de inicio de sesión.
- Una vez autenticado, podrás gestionar tus contactos.

## 📂 Estructura del proyecto

```
src/
├── app/
│   ├── core/        # Servicios y lógica compartida
│   ├── auth/        # Módulo de autenticación
│   ├── contactos/   # CRUD de contactos
│   ├── shared/      # Componentes y utilidades compartidas
│   ├── app.module.ts
├── assets/          # Recursos estáticos
├── environments/    # Configuración de entornos
```

## 📜 Licencia
Este proyecto está bajo la Licencia MIT.

## Vista previa

### Login

![Login](Screenshot%20from%202024-12-02%2010-36-44.png)

### CRUD Contactos

#### Listar

![Lista](Screenshot%20from%202024-12-02%2010-37-18.png)

#### Crear

![Crear](Screenshot%20from%202024-12-02%2010-37-28.png)

#### Editar

![Editar](Screenshot%20from%202024-12-02%2010-37-36.png)

👨‍💻 Autor
Desarrollado por Carlos Sosa.



