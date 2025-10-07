import { Router } from "express";
import productosRoutes from './productos.routes.js'
const router = Router()
// http://localhost:3000/api/productos/
router.use('/productos', productosRoutes)

export default router