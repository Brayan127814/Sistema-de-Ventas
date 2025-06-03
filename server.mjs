import express from 'express'; // Corregí "exress" a "express"
import connect from './Backend/Confing/config.mjs';
import cors from 'cors';
const PORT = process.env.PORT || 4000;
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// Importa tus modelos y rutas
import rol from './Backend/Models/rol.models.mjs';
import usuarios from './Backend/Models/usuarios.models.mjs';
import productos from './Backend/Models/productos.models.mjs';
import ventas from './Backend/Models/ventas.models.venta.mjs';
import clientes from './Backend/Models/clientes.models.mjs';
import categoria from './Backend/Models/categoria.model.mjs';
import authRoute from './Backend/Routes/authRoute.mjs';
import productRoutes from './Backend/Routes/ProductsRoutes.mjs';
import ventasRouter from './Backend/Routes/ventasRoutes.mjs';
import './Backend/Models/index.mjs'

const app = express();

// Middlewares básicos
app.use(express.json());
app.use(cors());

// ⭐⭐ Configuración de Swagger (aquí va) ⭐⭐
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Sistema de Ventas',
      version: '1.0.0',
      description: 'Documentación para la API de ventas, productos y usuarios',
    },
    servers: [
      { url: `http://localhost:${PORT}` }, // Ajusta según tu entorno
    ],
  },
  apis: ['./Backend/Routes/*.mjs'], // Asegúrate de que esta ruta sea correcta
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Rutas
app.use('/usuarios', authRoute);
app.use('/productos', productRoutes);
app.use('/ventas', ventasRouter);

// Iniciar servidor y sincronizar BD
const init = async () => {
  try {
    await connect.sync({ force: false }); // ¡Cuidado con `force: true` en producción!
    console.log('✅ Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📚 Documentación Swagger en http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('❌ Error al sincronizar la base de datos:', error);
  }
};

init();