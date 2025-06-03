## 🛍️ Sistema de Gestión de Ventas - API

### 📋 Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Autenticación y Usuarios](#autenticación-y-usuarios)
4. [Gestión de Productos](#gestión-de-productos)
5. [Procesamiento de Ventas](#procesamiento-de-ventas)
6. [Manejo de Errores](#manejo-de-errores)
7. [Mejoras Futuras](#mejoras-futuras)

---

### 🌟 Descripción General

Sistema completo para la gestión interna de ventas en empresas, diseñado para uso exclusivo del personal autorizado.

**Principales características:**

* 🔐 Autenticación segura por roles (admin/usuario)
* 📦 Gestión completa de productos y categorías
* 💵 Registro y seguimiento de ventas
* 👥 Administración de usuarios

---

### 🛠️ Tecnologías Utilizadas

| Tecnología | Función                        |
| ---------- | ------------------------------ |
| Node.js    | Entorno de ejecución principal |
| Express    | Framework para API REST        |
| MySQL      | Base de datos relacional       |
| Sequelize  | ORM para gestión de datos      |
| JWT        | Autenticación por tokens       |
| React      | Frontend básico                |
| HTML/CSS   | Estructura y estilos           |
| JavaScript | Funcionalidades frontend       |

---

### 🔐 Autenticación y Usuarios

#### Registro de Usuario

* **URL:** `POST /usuarios/adduser`
* **Headers:** `Content-Type: application/json`
* **Body:**

```json
{
  "nombre": "Nidia Florez",
  "cedula": "1007215806",
  "email": "nidia@gmail.com",
  "password": "Nidia$1235",
  "rolID": 1
}
```

* **Respuesta:**

```json
{
  "message": "Usuario creado exitosamente",
  "data": {
    "id": 3,
    "nombre": "Nidia Florez",
    "cedula": "1007215806",
    "email": "nidia@gmail.com",
    "rolID": 1
  },
  "error": null
}
```

#### Inicio de Sesión

* **URL:** `POST /usuarios/login`
* **Body:**

```json
{
  "email": "jesus@gmail.com",
  "password": "Brayan$1235"
}
```

* **Respuesta:**

```json
{
  "message": "Inicio de sesión exitoso",
  "token": "<token JWT>",
  "success": true
}
```

#### Perfil del Usuario

* **URL:** `GET /usuarios/profile`
* **Requiere Token:** Sí (Authorization)

---

### 📦 Gestión de Productos

#### Registro de Producto

* **URL:** `POST /productos/create`
* **Requiere Token Admin:** Sí
* **Body:**

```json
{
  "nombre": "Auriculares",
  "descripcion": "Con cancelación de ruido",
  "precio": 59.99,
  "cantidad_en_stock": 100,
  "categoriaID": 1,
  "imgProducto": "https://..."
}
```

* **Respuesta:**

```json
{
  "message": "Producto registrado correctamente.",
  "data": { ... },
  "error": null
}
```

---

### 💰 Procesamiento de Ventas

#### Registrar Nueva Venta

* **URL:** `POST /api/ventas`
* **Body:**

```json
{
  "productos": [
    { "id": 1, "cantidad": 2 },
    { "id": 3, "cantidad": 1 }
  ],
  "metodo_pago": "tarjeta"
}
```

* **Flujo del sistema:**

  * Verifica stock disponible
  * Calcula total automáticamente
  * Registra la venta y detalles
  * Actualiza inventario

#### Listar Ventas

* **URL:** `GET /api/ventas`
* **Parámetros opcionales:** `page`, `pageSize`
* **Lógica de permisos:**

  * Admin: todas las ventas
  * Usuario: solo sus ventas

---

### 🚨 Manejo de Errores

| Código | Situación         | Solución Sugerida      |
| ------ | ----------------- | ---------------------- |
| 400    | Datos inválidos   | Verificar formato JSON |
| 401    | No autorizado     | Validar token JWT      |
| 404    | Recurso no existe | Confirmar IDs          |
| 500    | Error servidor    | Revisar logs           |

---

### 📌 Mejoras Futuras

* Integración con pasarelas de pago
* Reportes estadísticos
* Dashboard administrativo
