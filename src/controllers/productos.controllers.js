import subirImagenACloudinary from "../helpers/cloudinaryUploader.js";
import Producto from "../models/producto.js";

export const prueba = (req, res) => {
  console.log("desde el controlador de prueba");
  res.send("Prueba desde el controlador");
};

export const crearProducto = async (req, res) => {
  try {
    let imagenUrl = "";

    if (req.file) {
      const resultado = await subirImagenACloudinary(req.file.buffer);
      imagenUrl = resultado.secure_url;
    } else {
      imagenUrl =
        "https://images.pexels.com/photos/126790/pexels-photo-126790.jpeg";
    }

    //req.body.imagen = imagenUrl

    const productoNuevo = new Producto({
      ...req.body,
      imagen: imagenUrl,
    });
    await productoNuevo.save();
    res.status(201).json({ mensaje: "El producto fue creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al crear el producto" });
  }
};

export const listarProductos = async (req, res) => {
  try {
    //1- buscar la collection de productos
    const productos = await Producto.find();
    //2- enviar la respuesta al front
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al listar los productos" });
  }
};
export const obtenerProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "No se encontro el producto" });
    }
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al listar los productos" });
  }
};

export const borrarProductoPorID = async (req, res) => {
  try {
    const productoBuscado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "No se encontro el producto" });
    }
    res
      .status(200)
      .json({ mensaje: "El producto fue eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error, no se pudo borrar el producto" });
  }
};

export const editarProductoPorID = async (req, res) => {
  try {
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "No se encontro el producto" });
    }

    const productoActualizado ={ ...req.body}

    if (req.file) {
      const resultado = await subirImagenACloudinary(req.file.buffer);
      productoActualizado.imagen = resultado.secure_url;
    }
    await Producto.updateOne({_id: req.params.id}, {$set: productoActualizado})

    res.status(200).json({ mensaje: "El producto fue editado correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error, no se pudo borrar el producto" });
  }
};
