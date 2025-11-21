import { Router } from "express"
import { crearOrdenCarrito, recibirWebhook } from "../controllers/pagos.controllers.js";

const router = Router();

router.route('/crear-orden-carrito').post(crearOrdenCarrito)
router.route('/webhook').post(recibirWebhook)

export default router;