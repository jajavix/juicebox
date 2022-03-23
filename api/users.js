// api/users.js

//ROUTES!!
const express = require("express");
const usersRouter = express.Router();
//new
const { getAllUsers } = require("../db");

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  res.send({ message: "hello from /users!" });

  next(); //this is different
});

//Update
usersRouter.get("/", async (reg, res) => {
  const users = await getAllUsers();

  res.send({
    users,
  });
});

//module exports

module.exports = usersRouter;
