const moongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

//connect to moongoose
require("./database/connection");

//middleware for json file;
app.use(express.json());

//register the middleware for the auth route

app.use(require("./Router/auth"));
//creating a collection with moongoose

const User = require("./models/userSchema");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/signup", (req, res) => {
  res.send("welcome from signup page");
});

app.get("/login", (req, res) => {
  res.send("welcome from login page");
});

// app.get("/about", Authentication, (req, res) => {
//   console.log("hello user");
//   res.send(req.rootUser);
// });

const port = process.env.PORT;
app.listen(port, (req, res) => {
  console.log("port is listening on 5000");
});
