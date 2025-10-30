import Usuario from "../models/usuario.js";

export const crearUsuario = async (req, res) => {
  try {
    const usuarioNuevo = new Usuario(req.body);
    
    await usuarioNuevo.save();
    res.status(201).json({mensaje: 'Usuario creado correctamente'})
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error, no se pudo crear el usuario" });
  }
};
