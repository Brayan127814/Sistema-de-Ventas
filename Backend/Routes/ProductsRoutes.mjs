import autenticarToken from "../Middelwars/autenticarToken.mjs";
import validarRol from "../Middelwars/validarRol.mjs";
import ProductController from "../controller/ProductsController.mjs";
import { Router } from "express";

const productRoutes = Router()
productRoutes.post('/create', autenticarToken,validarRol(['admin']), ProductController.productCreate)

export default productRoutes