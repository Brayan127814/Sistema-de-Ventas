import AuthController from "../controller/authController.mjs";
import { Router } from "express";

const authRoute= Router()
authRoute.post('/adduser',AuthController.adduser)
authRoute.post('/login',AuthController.KeyEntry)

export default authRoute