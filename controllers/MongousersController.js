const router = require("express").Router();
const User = require("../models/usersModel");

const middleware = require("../middleware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
module.exports = function mainApp() {
  router.post("/register", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    //generate secret key for encrypt our password
    const saltKey = await bcrypt.genSalt(10);
    //process encryption of the password
    const hashPassword = await bcrypt.hash(password, saltKey);

    //input data into db
    await User.create({
      username: username,
      password: hashPassword,
      salt: saltKey,
    });

    res.json({
      message: "success register new user",
      username: username,
    });
  });
  router.post("/login", async (req, res) => {
    let statusCode = 500;

    try {
      const username = req.body.username;
      const password = req.body.password;

      //cari data user dari DB dan bandingakan dengan data user login
      const users = await User.findOne({
        username: username,
      });
      //lakukan validasi username
      if (!users) {
        statusCode = 404;
        throw new Error("Users not found");
      }

      //cari data password dari DB dan bandingkan dengan data user login
      const isPasswordMatch = await bcrypt.compare(password, users.password);
      if (!isPasswordMatch) {
        statusCode = 400;
        throw new Error("Password is Invalid");
      }

      const token = jwt.sign(
        {
          id: users._id,
          username: users.username,
        },
        "b4yU999"
      );

      //buat response sukses login
      res.json({
        message: "You have successfully logged in",
        data: {
          token: token,
        },
      });
    } catch (error) {
      res.status(statusCode).json({
        message: error.message,
      });
    }
  });
  router.get("/all", async (req, res) => {
    try {
      const dataUser = await User.find({}, ["-password"]).populate({
        path: "profileId",
      });

      res.json({
        message: "success read all data user",
        result: dataUser,
      });
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/", middleware, async (req, res) => {
    try {
      const userId = res.locals.user.id;
      const dataUser = await User.findOne({ _id: userId }, [
        "-password",
      ]).populate({ path: "profileId" });

      res.json({
        message: "congratulation, you manage to access me!!",
        result: dataUser,
      });
    } catch (error) {
      console.log(error);
    }
  });

  router.put("/", middleware, async (req, res) => {
    const payload = req.body;
    const id = res.locals.user.id;
    await User.updateOne({ _id: id }, payload);
    res.json({
      message: "success update data user",
    });
  });

  router.delete("/", async (req, res) => {
    const id = req.query.id;
    await User.deleteOne({ _id: id });
    res.json({
      message: "success delete data user",
    });
  });

  return router;
};
