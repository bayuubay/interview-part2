const express = require("express");
const app = express();
const userSql = require("./SQLusersController")();
const userMongo = require("./MongousersController")();
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/users2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users/sql", userSql);
app.use("/users/mongo", userMongo);
app.listen(5000, () => console.log("running server 5000"));
