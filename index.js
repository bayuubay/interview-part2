const express = require("express");
const app = express();

const userSql = require("./controllers/SQLusersController")();
const userMongo = require("./controllers/MongousersController")();
const profileSql = require("./controllers/SQLProfileController")();
const profileMongo = require("./controllers/MongoProfileController")();
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(
  // `${process.env.MONGO_DB_LOCAL}`,
  `${process.env.MONGO_ATLAS}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
  res.send("<h1>WELCOME TO BAYU SURYO AJI'S PERSONAL WEBSITE</h1>")
})
app.use("/users/sql", userSql);
app.use("/users/mongo", userMongo);
app.use("/profile/sql", profileSql);
app.use("/profile/mongo", profileMongo);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`this app running on ${port}`));
