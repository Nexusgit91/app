const moongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userSchema = new moongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  Tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//applying a middleware before saving using userschema
userSchema.pre("save", async function (next) {
  console.log("hi from hashing password");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmpassword = await bcrypt.hash(this.confirmpassword, 12);
  }
  next();
});

//generate Token
//add a methods generateAuthToken in my blueprint
userSchema.methods.generateAuthToken = async function () {
  try {
    //generate a token
    let token = await jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    //store the token in the moongoose userschema
    //add a new ogject of token inside the array
    this.Tokens = this.Tokens.concat({ token: token });
    //save the token
    await this.save();
    //return the token to get by the user in login
    return token;
  } catch (err) {
    console.log(err);
  }
};

//stored the message
userSchema.methods.addMessage = async function (name, email, message) {
  console.log(`the message is ${message}`);
  try {
    this.messages = this.messages.concat({ name, email, message });
    await this.save();
    //just return the messages
    this.messages;
    console.log("MESSAGE SAVED");
    return;
  } catch (err) {
    console.log(err);
  }
};

//creating a collection
//name of the collection should be singular
const User = moongoose.model("USER", userSchema);

module.exports = User;
