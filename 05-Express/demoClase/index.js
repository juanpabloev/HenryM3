const express = require("express");
const morgan = require("morgan");
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

const server = express();

server.use("/", (req, res, next) => {
  console.log("Estamos pasando por este Middleware");
  next();
});

server.use(morgan("dev"));
server.use(express.json());

server.use("/users", usersRouter);
server.use("/posts", postsRouter);

server.listen("3001", () => {
  console.log("El servidor ya está funcionando en el puerto 3001");
});

/**
 *
 * CLIENTE localhost:3000/users RUTA DEL CLIENTE
 * RENDERIZAR UN COMPONENTE QUE QUIERO QUE ME MUESTRE LOS USUARIOS
 * useEffect => que vaya a buscar la info de los usuarios
 * dispatch(action)
 * action return function(){
 *  fetch(localhost:3001/users) RUTA DEL SERVER
 * .then(response=>response.json())
 * }
 *
 */
