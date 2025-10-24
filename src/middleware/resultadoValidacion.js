import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next)=>{
    const errores = validationResult(req)
    // ocurrieron errores en la validacion
    if(!errores.isEmpty()){
        return res.status(400).json(errores.array())
    }
    //continuar ejecucion
    next()
}

export default resultadoValidacion;