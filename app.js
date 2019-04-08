const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/api/users");

// const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${
//   process.env.MONGO_PASSWORD
// }@cluster0-idsge.mongodb.net/docker-MEN-jest?retryWrites=true`;
const MONGODB_URI = require("./config/keys").mongoURI;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello!</h1>");
});

app.use("/api/users", userRoutes);

const port = process.env.PORT || 8082;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("***** MongoDB connected *****");
    app.listen(port, () => {
      console.log(`Server running on ${port}.`);
    });
  })
  .catch(err => console.log(err));
