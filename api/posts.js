const express = require("express");
const usersRouter = express.Router();

const { requireUser } = require("../db");

postsRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next(); // THIS IS DIFFERENT
});

postsRouter.get("/", (req, res) => {
  res.send({
    posts: [],
  });
});

module.exports = postsRouter;
