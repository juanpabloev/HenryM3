const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  const { name } = req.query;
  // solo / => ME DEVUELVA TODOS LOS USUARIOS
  if (!name) return res.send("Te devuelvo todos los usuarios");
  return res.send(`Te estoy mandando la info del usuario ${name}`);
  // /name=Jorge => ME BUSQUE AL USUARIO JORGE
});

// GET - pedir info
// POST - enviar y guardar info
// PUT - modificar info existente
// DELETE - eliminar info

usersRouter.post("/", (req, res) => {
  console.log(req.body);
  const { name, mail, birth } = req.body;
  console.log(name);
  console.log(mail);
  console.log(birth);
  if (name && mail && birth) {
    return res.status(200).send("Recibí bien todos los datos");
  } else {
    return res
      .status(400)
      .send("Me faltan datos. No me mandaste todo lo que necesitaba");
  }
});

usersRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Estás pidiendo la info del usuario ${id}`);
});

module.exports = usersRouter;
