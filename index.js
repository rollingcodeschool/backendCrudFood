import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";

const server = new Server();

//agregar las rutas
// http://localhost:3000/api/productos/
server.app.use('/api', router)

server.listen()