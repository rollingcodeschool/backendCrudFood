import { param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionIdProducto = [
  param('id').isMongoId().withMessage('El id no corresponde con el formato de mongoDB'),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionIdProducto;
