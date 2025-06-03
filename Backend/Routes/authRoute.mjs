import AuthController from "../controller/authController.mjs";
import { Router } from "express";
import autenticarToken from "../Middelwars/autenticarToken.mjs";
import validarRol from "../Middelwars/validarRol.mjs";

const authRoute = Router();

/**
 * @swagger
 * /usuarios/adduser:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               rol:
 *                 type: string
 *                 enum: [admin, empleado]
 *             example:
 *               nombre: "Juan Pérez"
 *               email: "juan@example.com"
 *               password: "123456"
 *               rol: "empleado"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 */
authRoute.post('/adduser', AuthController.adduser);

/**
 * @swagger
 * /usuarios/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: "juan@example.com"
 *               password: "123456"
 *     responses:
 *       200:
 *         description: Login exitoso (devuelve token JWT)
 *       401:
 *         description: Credenciales inválidas
 */
authRoute.post('/login', AuthController.KeyEntry);

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener todos los empleados (solo admin)
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página
 *     responses:
 *       200:
 *         description: Lista de empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       403:
 *         description: Acceso denegado (sin permisos)
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
authRoute.get('/', autenticarToken, validarRol(['admin']), AuthController.getEmpleados);

/**
 * @swagger
 * /usuarios/profile:
 *   get:
 *     summary: Obtener perfil del usuario actual
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil del usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       401:
 *         description: Token inválido o no proporcionado
 */
authRoute.get('/profile', autenticarToken, validarRol(['admin', 'empleado']), AuthController.getprofileById);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualizar estado de un usuario (admin o empleado)
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: boolean
 *             example:
 *               estado: true
 *     responses:
 *       200:
 *         description: Estado actualizado
 *       404:
 *         description: Usuario no encontrado
 */
authRoute.put('/:id', autenticarToken, validarRol(['empleado', 'admin']), AuthController.stateUpdate);

export default authRoute;