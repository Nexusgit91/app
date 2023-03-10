const express = require("express");
var bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const Authentication = require("../Middleware/Authentication");
const cookieParser = require("cookie-parser");
router.use(cookieParser());
router.get("/", function (req, res) {
  res.send("Hello World from router");
});

router.post("/signup", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  if (!name || !email || !password || !confirmpassword) {
    res.status(400).json({ error: "please enter all the field" });
    console.log("please enter all the field");
  }

  try {
    const existUser = await User.findOne({ email: email });
    //if the user exist

    if (existUser) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != confirmpassword) {
      res.status(400).json({ error: "password are not matched" });
      console.log("password are not match ");
      return;
    } else {
      //else
      //create new user
      const newUser = new User({ name, email, password, confirmpassword });
      // before save we use presave() a middleware defined in userschema
      //saving the user

      const response = await newUser.save();
      console.log(response);
      res.status(201).json({ success: "successfully  created user" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login route
router.post("/login", async (req, res) => {
  let token;
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "please enter all the field" });
    }
    //findone matching email
    const userdata = await User.findOne({ email: email });
    //

    if (userdata) {
      //get the token from userdata
      //here we get the token
      token = await userdata.generateAuthToken();
      const isMatch = await bcrypt.compare(password, userdata.password);
      console.log(`token is ${token}`);

      //store the token inside the cookie;
      res.cookie("nexo", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (isMatch) {
        return res.status(200).json({ message: "user login" });
        console.log("user login");
      } else {
        return res.status(404).json({ error: "Invalid Crediential pass" });
        console.log("user not login");
      }
    } else {
      return res.status(404).json({ error: "user not found" });
      console.log("user not found");
    }
    if (!userdata) {
      return res.status(404).json({ error: "user not found" });
    } else {
      return res.status(200).json({ error: "Invalid Crediential " });
      console.log(userdata);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", Authentication, (req, res) => {
  console.log("hello user");
  res.send(req.rootUser);
});

router.get("/logout", (req, res) => {
  res.clearCookie("nexo", { path: "/" });
  res.status(200).send("user logout");
});

router.get("/getUser", Authentication, (req, res) => {
  console.log("hello user");
  res.send(req.rootUser);
});

router.post("/contact", Authentication, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if ((!name, !email, !message)) {
      console.log("error in contact form");
      return res.json({ error: "please filled the contact form" });
    }

    const userContact = await User.findOne({ _id: req.rootUserId });
    if (userContact) {
      const userMessage = await userContact.addMessage(name, email, message);
      await userContact.save();
      res.status(201).json({ message: "user contact successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
