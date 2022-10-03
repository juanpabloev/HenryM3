// const bodyParser = require("body-parser");
const { json } = require("express");
const express = require("express");
let id = 0;
const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];
const PATH = "/posts";
const server = express();
// to enable parsing of json bodies for post requests
// server.use(express.json());

server.use(express.json());
// TODO: your code to handle requests

server.post(PATH, function (req, res) {
  const { author, title, contents } = req.body;
  if (!author || !title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  } else {
    const post = {
      id: id + 1,
      author,
      title,
      contents,
    };
    posts.push(post);
    res.status(200).json(post);
  }
});

server.post(`${PATH}/author/:author`, (req, res) => {
  const { title, contents } = req.body;
  const { author } = req.params;
  if (!author || !title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  } else {
    const post = {
      id: id + 1,
      author,
      title,
      contents,
    };
    posts.push(post);
    res.status(200).json(post);
  }
});

server.get(PATH, (req, res) => {
  const { term } = req.query;
  if (term) {
    const result = posts.filter((post) => {
      return post.title.includes(term) || post.contents.includes(term);
    });
    res.status(200).json(result);
  } else {
    res.status(200).json(posts);
  }
});

server.get(`${PATH}/:author`, (req, res) => {
  const { author } = req.params;
  const result = posts.filter((post) => {
    return post.author === author;
  });
  if (result.length) {
    res.status(200).json(result);
  } else {
    res.status(STATUS_USER_ERROR).json({
      error: "No existe ningun post del autor indicado",
    });
  }
});

server.get(`${PATH}/:author/:title`, (req, res) => {
  const { author, title } = req.params;
  const result = posts.filter((post) => {
    return post.author === author && post.title === title;
  });
  if (result.length) {
    res.status(200).json(result);
  } else {
    res.status(STATUS_USER_ERROR).json({
      error: "No existe ningun post con dicho titulo y autor indicado",
    });
  }
});

module.exports = { posts, server };
