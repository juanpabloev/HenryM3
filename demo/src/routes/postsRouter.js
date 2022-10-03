const { Router } = require("express");
const { createPost } = require("../models/controllers");

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
  res.send("Estoy en las rutas de posts");
});

postsRouter.post("/", (req, res) => {
  try {
    const { userId, title, contents } = req.body;
    if (!userId || !title || !contents) throw new Error("Missing info");
    const newPost = createPost(title, contents, userId);
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// POSTS
// RUTA GET POSTS => PARA QUE ME TRAIGA TODOS LOS POSTS
// RUTA POST/:ID => PARA QUE ME TRAIGA EL POST DEL ID
// RUTA PUT DE POSTS => PARA MODIFICAR EL POST
// RUTA DELETE DE POSTS => PARA BORRAR EL POST

module.exports = postsRouter;
