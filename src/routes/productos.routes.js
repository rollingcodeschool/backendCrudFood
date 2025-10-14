import { Router } from "express";
import { crearProducto, listarProductos, prueba } from "../controllers/productos.controllers.js";
/*
GET
POST
PATH O PUT
DELETE
*/ 

const router = Router()

router.route('/test').get(prueba)
router.route('/').post(crearProducto).get(listarProductos)

export default router