import { Router } from "express";
import {
  borrarProductoPorID,
  crearProducto,
  editarProductoPorID,
  listarProductos,
  obtenerProducto,
  productosPaginados,
  prueba,
} from "../controllers/productos.controllers.js";
import validacionProducto from "../middleware/validacionProducto.js";
import validacionIdProducto from "../middleware/validacionIdProducto.js";
import verificarJWT from "../middleware/verificarToken.js";
import upload from "../helpers/upload.js";
import errorMulter from "../middleware/errorMulter.js";
/*
GET
POST
PATH O PUT
DELETE
*/

const router = Router();

router.route("/test").get(prueba);
router
  .route("/")
  .post(
    [verificarJWT, upload.single("imagen"), errorMulter, validacionProducto],
    crearProducto
  )
  .get(listarProductos);
router.route("/paginacion").get(productosPaginados);
router
  .route("/:id")
  .get(validacionIdProducto, obtenerProducto)
  .delete([verificarJWT, validacionIdProducto], borrarProductoPorID)
  .put(
    [
      verificarJWT,
      upload.single("imagen"),
      errorMulter,
      validacionIdProducto,
      validacionProducto,
    ],
    editarProductoPorID
  );

export default router;
