# 🛒 Sistema de Ventas

Este proyecto es un sistema de ventas desarrollado como una solución interna para una empresa o almacén. Permite a los usuarios de la empresa gestionar productos, clientes y registrar ventas, todo desde una interfaz sencilla y funcional.

El sistema no está orientado a usuarios finales ni a compras en línea, sino al uso exclusivo por parte del personal autorizado dentro de la organización.

---

## 🚀 Tecnologías utilizadas

### Backend
- **Node.js** – Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js** – Framework web minimalista para Node.js.
- **MySQL** – Sistema de gestión de base de datos relacional.
- **Sequelize** – ORM para manejar la base de datos.
- **JWT** – Autenticación basada en tokens.
- **bcrypt** – Encriptación segura de contraseñas.
- **dotenv** – Gestión de variables de entorno.

### Frontend (mínimo funcional)
- **HTML + CSS + JavaScript**
- **React** – Interfaz básica de inicio de sesión y navegación para usuarios internos.

---

## 🔐 Módulo de Autenticación

El sistema de autenticación implementado ofrece las siguientes funcionalidades:

### ✅ Registro de usuarios

- Validación de campos vacíos.
- Verificación de seguridad de contraseña: mínimo 8 caracteres, mayúsculas, minúsculas, números y símbolos.
- Encriptación segura de contraseñas usando bcrypt.
- Almacenamiento estructurado a través del repositorio `authRepository`.

### 🔑 Inicio de sesión

- Validación de credenciales.
- Verificación de usuario existente.
- Comparación de contraseñas.
- Generación de token JWT válido por 1 hora.

Estas funcionalidades están centralizadas en la clase `AuthService`.

---

## 📡 Ejemplos de consumo de endpoints

### 1. Registro de Usuario

**URL:** `http://localhost:5000/usuarios/adduser`  
**Método:** `POST`  
**Headers:** `Content-Type: application/json`  
**Body (JSON):**
```json
{
  "nombre": "Nidia Florez",
  "cedula": "1007215806",
  "email": "nidia@gmail.com",
  "password": "Nidia$1235",
  "rolID": 1
}

--- Respuesta 

{
  "message": "Usuario creado exitosamente",
  "data": {
    "id": 3,
    "nombre": "Nidia Florez",
    "cedula": "1007215806",
    "email": "nidia@gmail.com",
    "password": "$2b$10$lo2V.oTJDWLAuwwka3rAROsc4dGr7bR1VfCseInyPlkEo86qcMvL6",
    "rolID": 1,
    "updatedAt": "2025-05-15T02:02:16.922Z",
    "createdAt": "2025-05-15T02:02:16.922Z"
  },
  "error": null
}






#### Inicio de sesión
-**URL: ** http://localhost:5000/usuarios/login
 - **Método:** POST
 - **Headers:** Content-Type: application/json
-  **Body (JSON):**


{
  "email": "jesus@gmail.com",
  "password": "Brayan$1235"
}
Respuesta exitosa
{
  "message": "Inicio de sesión exitoso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "success": true
}

# 🛒 Sistema de Ventas - API

## Endpoints

---

### Consulta de perfil de usuario

- **URL:** `http://localhost:5000/usuarios/profile`  
- **Método:** `GET`  
- **Descripción:** Obtiene el perfil del usuario que está autenticado.

**Respuesta exitosa:**

```json
{
  "message": "Perfil de usuario",
  "data": {
    "id": 1,
    "nombre": "Brayan Castillo",
    "cedula": "1007515804",
    "email": "jesus@gmail.com",
    "estado": "Activo",
    "rolID": 1,
    "createdAt": "2025-05-18T20:23:33.000Z",
    "updatedAt": "2025-05-18T20:23:33.000Z",
    "rol": {
      "roleName": "admin"
    }
  },
  "error": null
}


# Modulo para el registro de Productos

- Validacion de campos para que no se pasen valores vacíos
- En este modulo hará
- Registro de producto
- Listar todos los productos
- listar por categorias 
- Actualizar productos


## Registro de pruducots
- **URL:** `http://localhost:5000/productos/create`
- **Método:** `POST`
- **Descripción:** Solo los usuarios con rol de **admin** pueden insertar un producto.


```json

{
  "nombre": "Auriculares Inalámbricos Bluetooth",
  "descripcion": "Auriculares con cancelación de ruido, micrófono incorporado y estuche de carga.",
  "precio": 59.99,
  "cantidad_en_stock": 120,
  "categoriaID": 1,
  "imgProducto": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVyaWN1bGFyZXMlMjBpbmFsYW1icmljb3N8ZW58MHx8MHx8fDA%3D"
}

**Respuesta exitosa:**

```json

{
    "message": "✅ Producto registrado correctamente.",
    "data": {
        "id": 1,
        "nombre": "Auriculares Inalámbricos Bluetooth",
        "descripcion": "Auriculares con cancelación de ruido, micrófono incorporado y estuche de carga.",
        "precio": 59.99,
        "cantidad_en_stock": 120,
        "categoriaID": 1,
        "imgProducto": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVyaWN1bGFyZXMlMjBpbmFsYW1icmljb3N8ZW58MHx8MHx8fDA%3D",
        "updatedAt": "2025-05-18T21:20:33.614Z",
        "createdAt": "2025-05-18T21:20:33.614Z"
    },
    "error": null
}