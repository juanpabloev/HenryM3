// const express = require("express");
const { Router } = require("express");
const {
  getUsers,
  getUsersByName,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
} = require("../models/controllers");

// const usersRouter = express.Router();
const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  const { name } = req.query;
  if (name) {
    const users = getUsersByName(name);
    if (users["error"]) return res.status(400).json(users);
    else return res.status(200).json(users);
  } else {
    const users = getUsers();
    return res.status(200).json(users);
  }
});

usersRouter.post("/", (req, res) => {
  const { name, surname, mail, age } = req.body;
  if (!name || !surname || !mail || !age)
    return res.status(400).json({ error: "missing info" });

  const newUser = createUser(name, surname, mail, age);
  res.status(200).json(newUser);
});

usersRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = getUserById(id);
  if (user["error"]) return res.status(400).json(user);
  else res.status(200).json(user);
});

usersRouter.put("/", (req, res) => {
  const { id, name, surname, mail, age } = req.body;
  if (!id || !name || !surname || !mail || !age)
    return res.status(400).json({ error: "missing info" });

  const updatedUser = updateUser(id, name, surname, mail, age);

  if (updatedUser["error"]) return res.status(400).json(updatedUser);
  else res.status(200).json(updatedUser);
});

usersRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deletedUser = deleteUser(id);

  if (deletedUser["error"]) return res.status(400).json(deletedUser);
  else res.status(200).json(deletedUser);
});

module.exports = usersRouter;
