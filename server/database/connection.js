//connect to moongoose
const moongoose = require("mongoose");
const url = process.env.URL;

moongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });
