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






. Inicio de sesión
***URL***: http://localhost:5000/usuarios/login
Método: POST
Headers: Content-Type: application/json
Body (JSON):


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
