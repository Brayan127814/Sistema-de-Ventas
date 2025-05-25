
🛍️ Sistema de Gestión de Ventas - API
📋 Tabla de Contenidos
Descripción General

Tecnologías Utilizadas

Autenticación y Usuarios

Gestión de Productos

Procesamiento de Ventas

Manejo de Errores

🌟 Descripción General
Sistema completo para la gestión interna de ventas en empresas, diseñado para uso exclusivo del personal autorizado.

Principales características:

🔐 Autenticación segura por roles (admin/usuario)

📦 Gestión completa de productos y categorías

💵 Registro y seguimiento de ventas

👥 Administración de usuarios

🛠️ Tecnologías Utilizadas
Backend
Tecnología	Función
Node.js	Entorno de ejecución principal
Express	Framework para el API REST
MySQL	Base de datos relacional
Sequelize	ORM para gestión de datos
JWT	Autenticación por tokens
Frontend (Mínimo)
Interfaz básica con React

Estructura HTML/CSS simple

Funcionalidades esenciales en JavaScript

🔐 Autenticación y Usuarios
Registro de Nuevos Usuarios
http
POST /usuarios/adduser
Datos requeridos:

json
{
  "nombre": "Ejemplo Usuario",
  "email": "usuario@empresa.com",
  "password": "ClaveSegura123*",
  "rolID": 2
}
Validaciones:

Contraseña con 8+ caracteres, mayúsculas, números y símbolos

Email único en el sistema

Todos los campos obligatorios

📦 Gestión de Productos
Registrar Nuevo Producto
http
POST /productos/create
Requisitos:

🔑 Token de administrador válido

Estructura del producto:

json
{
  "nombre": "Producto Ejemplo",
  "precio": 99.99,
  "stock": 50,
  "categoriaID": 3
}
Respuesta exitosa:

json
{
  "status": 201,
  "data": {
    "id": 25,
    "nombre": "Producto Ejemplo",
    "precio": 99.99
  }
}
💰 Procesamiento de Ventas
Registrar Nueva Venta
http
POST /api/ventas
Datos de venta:

json
{
  "productos": [
    {"id": 1, "cantidad": 2},
    {"id": 3, "cantidad": 1}
  ],
  "metodo_pago": "tarjeta"
}
Flujo del sistema:

Verifica stock disponible

Calcula total automáticamente

Registra venta y actualiza inventario

Genera comprobante

🚨 Manejo de Errores
Código	Situación	Solución sugerida
400	Datos inválidos	Verificar formato JSON
401	No autorizado	Validar token JWT
404	Recurso no existe	Confirmar IDs
500	Error servidor	Revisar logs
📌 Mejoras Futuras
Integración con pasarelas de pago

Reportes estadísticos

Dashboard administrativo
