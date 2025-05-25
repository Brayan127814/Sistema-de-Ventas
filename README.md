🛍️ Sistema de Gestión de Ventas - API
📋 Tabla de Contenidos
Descripción General

Tecnologías Utilizadas

Autenticación y Usuarios

Gestión de Productos

Procesamiento de Ventas

Manejo de Errores

Mejoras Futuras

🌟 Descripción General
Sistema completo para la gestión interna de ventas en empresas, diseñado para uso exclusivo del personal autorizado.

Principales características:

🔐 Autenticación segura por roles (admin/usuario)

📦 Gestión completa de productos y categorías

💵 Registro y seguimiento de ventas

👥 Administración de usuarios

🛠️ Tecnologías Utilizadas
Tecnología	Función
Node.js	Entorno de ejecución principal
Express	Framework para API REST
MySQL	Base de datos relacional
Sequelize	ORM para gestión de datos
JWT	Autenticación por tokens
React	Frontend básico
HTML/CSS	Estructura y estilos
JavaScript	Funcionalidades frontend

🔐 Autenticación y Usuarios
Registro de Nuevos Usuarios
URL:
POST /usuarios/adduser

Datos requeridos (JSON):

json
Copiar
Editar
{
  "nombre": "Ejemplo Usuario",
  "email": "usuario@empresa.com",
  "password": "ClaveSegura123*",
  "rolID": 2
}
Validaciones:

Contraseña con mínimo 8 caracteres, incluyendo mayúsculas, números y símbolos.

Email único en el sistema.

Todos los campos son obligatorios.

📦 Gestión de Productos
Registrar Nuevo Producto
URL:
POST /productos/create

Requisitos:

Token válido con rol de administrador.

Estructura del producto (JSON):

json
Copiar
Editar
{
  "nombre": "Producto Ejemplo",
  "precio": 99.99,
  "stock": 50,
  "categoriaID": 3
}
Respuesta exitosa (JSON):

json
Copiar
Editar
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
URL:
POST /api/ventas

Datos de venta (JSON):

json
Copiar
Editar
{
  "productos": [
    {
      "id": 1,
      "cantidad": 2
    },
    {
      "id": 3,
      "cantidad": 1
    }
  ],
  "metodo_pago": "tarjeta"
}
Flujo del sistema:

Verifica que haya stock disponible para cada producto.

Calcula el total automáticamente.

Registra la venta y actualiza el inventario.

Genera el comprobante de venta.

🚨 Manejo de Errores
Código	Situación	Solución sugerida
400	Datos inválidos	Verificar formato JSON
401	No autorizado	Validar token JWT
404	Recurso no existe	Confirmar IDs
500	Error servidor	Revisar logs

📌 Mejoras Futuras
Integración con pasarelas de pago.

Reportes estadísticos.

Dashboard administrativo.
