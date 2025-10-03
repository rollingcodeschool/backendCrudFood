import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

//1- Tomar un puerto
//2- configura los middlewares
//3- usa las rutas
export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middlewares();
  }

  middlewares() {
    this.app.use(cors()); //permite conexiones remotas
    this.app.use(express.json()); //permite interpretar los datos que lleguen en la solicitud en formato json
    this.app.use(morgan("dev")); // nos ofrece datos extras en la terminal
    //configurar un archivo estatico
    const __dirname = dirname(fileURLToPath(import.meta.url));
    console.log(__dirname);
    console.log(__dirname + "../../public");
    this.app.use(express.static(__dirname + "/../../public"));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.info(`El servidor se esta ejecutando en: http://localhost:${this.port}`)
    );
  }
}
