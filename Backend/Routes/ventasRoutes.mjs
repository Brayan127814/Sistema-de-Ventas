import VentaController from "../controller/ventaController.mjs";
import { Router } from "express";
import autenticarToken from "../Middelwars/autenticarToken.mjs";
import validarRol from "../Middelwars/validarRol.mjs";

const ventasRouter= Router()
ventasRouter.post('/addventa',autenticarToken,validarRol(['admin','empleado']),VentaController.registerVenta)

export default ventasRouter