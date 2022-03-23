// api/index.js
const express = require("express");
const apiRouter = express.Router();

//router
//1. usersRouter
const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

//2. usersRouter
const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

//module exports
module.exports = apiRouter;
