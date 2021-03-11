const router = require("express").Router();
const User = require("../models/usersModel");
const Profile = require("../models/profilesModel");

const middleware = require("../middleware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
module.exports = function mainApp() {
  router.post("/", middleware, async (req, res) => {
    const id = res.locals.user.id;
    const payload = req.body;

    //input data into db
    const result = await Profile.create({
      gender: payload.gender,
      age: payload.age,
    });
    await User.updateOne({ _id: id }, { profileId: result._id });
      console.log(id)
    res.json({
      message: "success register new user",
      result: result,
    });
  });

  router.get("/", middleware, async (req, res) => {
    try {
      const userId = res.locals.user.id;
      const id = req.query.id;
      const dataUser = await Profile.findOne({ _id: id });

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
    const id = req.query.id
    await Profile.updateOne({ _id: id }, payload);
    res.json({
      message: "success update data user",
    });
  });

  router.delete("/", async (req, res) => {
    const id = req.query.id;
    await Profile.deleteOne({ _id: id });
    res.json({
      message: "success delete data user",
    });
  });

  return router;
};
