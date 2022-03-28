require("dotenv").config();

// EVERYTHING ELSE

//start a web server
const { PORT = 3000 } = process.env;
const express = require("express");
const path = require("path");
const server = express();

//bodyParser
const bodyParser = require("body-parser");
server.use(bodyParser.json());

//Morgan middleware
const morgan = require("morgan");
server.use(morgan("dev"));

//First middleware!!
// the call on server.user tells the server to always call this function
server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});
// stuff above here

//related to middleware
const apiRouter = require("./api");
server.use("/api", apiRouter);

//related to middleware
const { client } = require("./db");
client.connect();

//PORT
server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
