import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
  body("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es un dato obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres"),
  body("precio")
    .notEmpty()
    .withMessage("El precio del producto es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio del producto debe ser numerico")
    .isFloat({ min: 100, max: 1000000 })
    .withMessage("El precio del producto debe estar entre 100 y 1000000 de pesos argentinos"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
