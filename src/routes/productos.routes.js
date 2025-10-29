import { Router } from "express";
import {
  borrarProductoPorID,
  crearProducto,
  editarProductoPorID,
  listarProductos,
  obtenerProducto,
  prueba,
} from "../controllers/productos.controllers.js";
import validacionProducto from "../middleware/validacionProducto.js";
import validacionIdProducto from "../middleware/validacionIdProducto.js";
/*
GET
POST
PATH O PUT
DELETE
*/

const router = Router();

router.route("/test").get(prueba);
router.route("/").post(validacionProducto,crearProducto).get(listarProductos);
router.route("/:id").get(validacionIdProducto, obtenerProducto).delete(validacionIdProducto, borrarProductoPorID).put([validacionIdProducto, validacionProducto],editarProductoPorID)

export default router;
