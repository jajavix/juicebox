const express = require("express");
const usersRouter = express.Router();

const { requireUser } = require("../db");

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next(); // THIS IS DIFFERENT
});

tagsRouter.get("/", (req, res) => {
  res.send({
    posts: [],
  });
});

module.exports = tagsRouter;
