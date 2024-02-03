// app.js

const express = require("express");
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");
const cloudinary = require("cloudinary").v2; // Agregar Cloudinary

// Configurar Cloudinary con las credenciales de tu archivo de configuración
const config = require("../config.js");
cloudinary.config(config.cloudinary);

require("./db.js");
const server = express();

// Middleware para gestionar la carga de archivos en las solicitudes HTTP.
// Se utiliza express-fileupload para facilitar la carga de archivos en las rutas de la aplicación.
const fileUpload = require("express-fileupload");
server.use(fileUpload());

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", router);

module.exports = server;
