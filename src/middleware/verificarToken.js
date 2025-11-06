import jwt from "jsonwebtoken";

const verificarJWT = (req, res, next)=>{
    try {
        const token = req.headers['x-token']
        if(!token){
           return res.status(401).json({mensaje: 'No hay token en la peticion'})
        }
        const payload = jwt.verify(token, process.env.SECRETJWT)
        //puedo extrar la información del payload
        req.usuario = payload.usuario
        next()
    } catch (error) {
        console.error(error)
        res.status(401).json({mensaje: 'Token no valido', error: error.message})
    }
}

export default verificarJWT