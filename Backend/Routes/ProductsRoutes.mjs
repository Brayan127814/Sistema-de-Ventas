import autenticarToken from "../Middelwars/autenticarToken.mjs";
import validarRol from "../Middelwars/validarRol.mjs";
import ProductController from "../controller/ProductsController.mjs";
import { Router } from "express";

const productRoutes = Router()
//Solo el admin puede registrar un nuevo producto en la base de datos
productRoutes.post('/create', autenticarToken,validarRol(['admin']), ProductController.productCreate)
//Obtener productos por categorias (admin y empleado)
productRoutes.get('/categoria/:categoriaID',autenticarToken, validarRol(['admin','empleado']),ProductController.categoriaByID)
//Obtener todos los productos (admin y empleados)
productRoutes.get('/',autenticarToken,validarRol(['admin','empleado']),ProductController.allProducts)

export default productRoutes