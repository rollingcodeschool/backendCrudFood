import { Router } from "express";
import productosRoutes from './productos.routes.js'
import usuariosRouter from "./usuarios.routes.js";
import pagosRouter from "./pagos.routes.js";


const router = Router()
// http://localhost:3000/api/productos/
router.use('/productos', productosRoutes)
router.use('/usuarios', usuariosRouter)
router.use('/pagos', pagosRouter)

export default router