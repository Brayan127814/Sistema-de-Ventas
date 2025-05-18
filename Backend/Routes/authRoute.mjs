import AuthController from "../controller/authController.mjs";
import { Router } from "express";
import autenticarToken from "../Middelwars/autenticarToken.mjs";
import validarRol from "../Middelwars/validarRol.mjs";

const authRoute= Router()
authRoute.post('/adduser',AuthController.adduser)
authRoute.post('/login',AuthController.KeyEntry)
authRoute.get('/',autenticarToken,validarRol(['admin']),AuthController.getEmpleados)
authRoute.get('/profile',autenticarToken,validarRol(['admin','empleado']),AuthController.getprofileById)
authRoute.put('/:id',autenticarToken,validarRol(['empleado','admin']),AuthController.stateUpdate)



export default authRoute