const jwt = require("jsonwebtoken");

const User = require("../models/userSchema");

const Authentication = async (req, res, next) => {
  try {
    //require the token from the head section
    const token = req.cookies.nexo;
    //verify the token and give the payload object having the userId and token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    //check for the particular user whose token matches;
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "Tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("user not found");
    }
    //now send the token
    // the lines req.token = token and req.user = user are used to attach the token and user objects to the req object,

    //which is passed on to the next middleware function or route handler in the request-response cycle.

    //used by the user to authorized or whatever
    req.token = token;
    //and the data of the user
    req.rootUser = rootUser;
    req.rootUserId = rootUser._id;
    next();
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports = Authentication;

// const jwt = require("jsonwebtoken");
// const User = require("../models/userSchema");

// const Authentication = (req, res, next) => {
//   try {

// req.cookies.jwtToken=
//   } catch (err) {
//     res.status(401).send("unauthorized :no token is provided");
//   }
// };
