//start a web server
const PORT = 3000;
const express = require("express");
const server = express();

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});

//Morgan middleware
const morgan = require("morgan");
server.use(morgan("dev"));

server.use(express.json());

// stuff above here

//related to middleware
const apiRouter = require("./api");
server.use("/api", apiRouter);

// stuff below here

//related to middleware
const { client } = require("./db");
client.connect();

//First middleware!!
// the call on server.user tells the server to always call this function
server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});
