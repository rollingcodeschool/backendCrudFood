import { Router } from "express";
import { crearProducto, prueba } from "../controllers/productos.controllers.js";
/*
GET
POST
PATH O PUT
DELETE
*/ 

const router = Router()

router.route('/test').get(prueba)
router.route('/').post(crearProducto)

export default router