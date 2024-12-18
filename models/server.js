const express = require("express");
const cors = require("cors");
const { getConnection } = require("../database/configuracion");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // conectar base de datos
    this.conectarBaseDatos();

    //Middlewares
    this.middlewares();

    //Rutas de la aplicación
    this.routes();
  }

  async conectarBaseDatos() {
    await getConnection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    //Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
