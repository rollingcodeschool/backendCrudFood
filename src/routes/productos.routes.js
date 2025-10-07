import { Router } from "express";
import { prueba } from "../controllers/productos.controllers.js";
/*
GET
POST
PATH O PUT
DELETE
*/ 

const router = Router()

router.route('/test').get(prueba)

export default router