import Producto from "../models/producto.js";

export const prueba = (req, res) => {
  console.log("desde el controlador de prueba");
  res.send("Prueba desde el controlador");
};

export const crearProducto = async (req, res) => {
  try {
    //1- verificar que llegan los datos validados
    //2- pedir al modelo Producto crear el objeto en la base de datos
    // console.log(req.body)
    const productoNuevo = new Producto(req.body)
    await productoNuevo.save()
    res.status(201).json({ mensaje: 'El producto fue creado exitosamente'})
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al crear el producto" });
  }
};

export const listarProductos = async (req, res) => {
  try {
   //1- buscar la collection de productos
   const productos = await Producto.find()
   //2- enviar la respuesta al front
   res.status(200).json(productos)
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al listar los productos" });
  }
};
