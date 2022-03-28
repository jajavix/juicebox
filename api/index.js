// api/index.js
const express = require("express");
const apiRouter = express.Router();

//json token
const jwt = require("jsonwebtoken");
const { getUserById } = require("../db");
const { JWT_SECRET } = process.env;

// set `req.user` if possible
apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");

  //1, IF: the Authorization wasnt set
  if (!auth) {
    // nothing to see here
    next();
    //2. ELSE IF: it was set, and begins with Bearer, token is accepted and
    //on successful verify and if failed throws an error, try/catch block
    //slice():methods returns a shallow copy of a portion of an array
    // into a new array obejct from start to end,
    //where start and end represent the index of items in that array
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const { id } = jwt.verify(token, JWT_SECRET);

      if (id) {
        req.user = await getUserById(id);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }

    //ELSE: a user set the header but it wasnt formed correctly,
    //we send a name and message to next()
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

//jwt middleware above
apiRouter.use((req, res, next) => {
  if (req.user) {
    console.log("User is set:", req.user);
  }

  next();
});

//Routers below
//1. usersRouter
const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

//2. postsRouter
const postsRouter = require("./posts");
apiRouter.use("/posts", postsRouter);

//3. tagsRouter
const tagsRouter = require("./tags");
apiRouter.use("/tags", tagsRouter);

// simple error handler
apiRouter.use((error, req, res, next) => {
  res.send({
    name: error.name,
    message: error.message,
  });
});

//export router
module.exports = apiRouter;
