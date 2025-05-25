🛍️ Sistema de Gestión de Ventas - API
📋 Tabla de Contenidos
Descripción General

Tecnologías Utilizadas

Módulo de Autenticación

Endpoints de Usuarios

Módulo de Productos

Módulo de Ventas

🌟 Descripción General
Sistema interno de gestión de ventas para empresas, con:

Autenticación segura por roles

CRUD de productos y categorías

Registro y consulta de ventas

Gestión de usuarios

🔒 Uso exclusivo para personal autorizado

🛠️ Tecnologías Utilizadas
Backend
Tecnología	Uso
Node.js	Entorno de ejecución
Express.js	Framework web
MySQL	Base de datos relacional
Sequelize	ORM para MySQL
JWT	Autenticación por tokens
bcrypt	Encriptación de contraseñas
Frontend (Mínimo)
HTML/CSS/JavaScript básico

React para interfaz administrativa

🔐 Módulo de Autenticación
Registro de Usuarios
http
POST /usuarios/adduser
Body:

json
{
  "nombre": "Nidia Florez",
  "cedula": "1007215806",
  "email": "nidia@gmail.com",
  "password": "Nidia$1235",
  "rolID": 1
}
Validaciones:

Contraseña segura (8+ caracteres, mayúsculas, números)

Campos obligatorios

Email único

Inicio de Sesión
http
POST /usuarios/login
Body:

json
{
  "email": "jesus@gmail.com",
  "password": "Brayan$1235"
}
Respuesta Exitosa:

json
{
  "message": "Inicio de sesión exitoso",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "success": true
}
👥 Endpoints de Usuarios
Consulta de Perfil
http
GET /usuarios/profile
Respuesta:

json
{
  "message": "Perfil de usuario",
  "data": {
    "id": 1,
    "nombre": "Brayan Castillo",
    "email": "jesus@gmail.com",
    "rol": "admin"
  }
}
📦 Módulo de Productos
Registrar Producto
http
POST /productos/create
Requisitos:

Rol admin

Token válido

Body:

json
{
  "nombre": "Auriculares Bluetooth",
  "descripcion": "Con cancelación de ruido",
  "precio": 59.99,
  "cantidad_en_stock": 120,
  "categoriaID": 1
}
Respuesta Exitosa:

json
{
  "message": "✅ Producto registrado",
  "data": {
    "id": 1,
    "nombre": "Auriculares Bluetooth",
    "precio": 59.99,
    "stock": 120
  }
}
💰 Módulo de Ventas
Registrar Venta
http
POST /api/ventas
Body:

json
{
  "fecha": "2025-05-25",
  "metodo_pago": "efectivo",
  "productos": [
    {"id": 1, "cantidad": 2},
    {"id": 5, "cantidad": 1}
  ]
}
Validaciones:

Stock disponible

Productos existentes

Usuario autenticado

Respuesta Exitosa:

json
{
  "message": "Venta registrada",
  "venta": {
    "id": 101,
    "total": 350.00,
    "fecha": "2025-05-25"
  }
}
🚨 Posibles Errores
Código	Descripción
400	Validación fallida
401	No autorizado
404	Recurso no encontrado
500	Error interno del servidor
📌 Notas Importantes
Todos los endpoints (excepto login) requieren token JWT

Algunas funcionalidades son exclusivas para admin

Las fechas deben enviarse en formato YYYY-MM-DD
