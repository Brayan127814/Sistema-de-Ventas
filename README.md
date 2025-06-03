🛍️ Sistema de Gestión de Ventas - API
Documentación Completa en README.md

markdown
# 🚀 API de Sistema de Ventas

## 🔐 Autenticación
Todos los endpoints (excepto `/usuarios/login`) requieren:
```http
Authorization: Bearer <token_jwt>
📚 Endpoints
👥 Usuarios
POST /usuarios/adduser - Registrar usuario
Roles permitidos: admin
Request:

json
{
  "nombre": "Nidia Florez",
  "cedula": "1007215806",
  "email": "nidia@gmail.com",
  "password": "Nidia$1235",
  "rolID": 1
}
Respuesta (201):

json
{
  "message": "Usuario creado exitosamente",
  "data": {
    "id": 3,
    "nombre": "Nidia Florez",
    "email": "nidia@gmail.com"
  }
}
POST /usuarios/login - Iniciar sesión
Request:

json
{
  "email": "jesus@gmail.com",
  "password": "Brayan$1235"
}
Respuesta (200):

json
{
  "message": "Inicio de sesión exitoso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
📦 Productos
POST /productos/create - Crear producto
Roles permitidos: admin
Request:

json
{
  "nombre": "Auriculares Bluetooth",
  "precio": 59.99,
  "cantidad_en_stock": 120,
  "categoriaID": 1
}
Respuesta (201):

json
{
  "message": "Producto registrado correctamente",
  "data": {
    "id": 1,
    "nombre": "Auriculares Bluetooth"
  }
}
💰 Ventas
POST /api/ventas - Registrar venta
Request:

json
{
  "productos": [
    {"id": 1, "cantidad": 2}
  ]
}
Respuesta (201):

json
{
  "message": "Venta registrada",
  "data": {
    "total": 119.98,
    "detalle": [
      {
        "producto": "Auriculares Bluetooth",
        "cantidad": 2
      }
    ]
  }
}
GET /api/ventas - Listar ventas
Parámetros:

page (default: 1)

pageSize (default: 10)

Respuesta (200):

json
{
  "message": "Listado de ventas",
  "data": {
    "totalVentas": 5,
    "ventas": [
      {
        "total": 119.98,
        "detalle_de_ventas": [
          {
            "producto": "Auriculares Bluetooth",
            "cantidad": 2
          }
        ]
      }
    ]
  }
}
🚨 Manejo de Errores
Código	Situación	Ejemplo de respuesta
400	Validación fallida	{"error": "Campos inválidos"}
401	No autenticado	{"error": "Token requerido"}
403	Permisos insuficientes	{"error": "Acceso denegado"}
404	Recurso no encontrado	{"error": "Producto no existe"}
💻 Ejecución Local
bash
# Instalar dependencias
npm install

# Iniciar servidor
npm start
Accede a la documentación interactiva:
http://localhost:5000/api-docs