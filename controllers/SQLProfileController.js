const router = require("express").Router();
const db = require("../models");

module.exports = function mainApp() {
  //join with users
  router.get("/", async (req, res) => {
    const profile = await db.profiles.findAll();
    res.json({ message: "success get data user", profile });
  });
  router.post("/", async (req, res) => {
    const payload = req.body;
    const data = {
      gender: payload["gender"],
      age: payload["age"],
      cratedAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await db.profiles.create(data);
    res.json({ message: "success get data user", result });
  });
  router.put("/", async (req, res) => {
    const payload = req.body;
    const data = {
      gender: payload["gender"],
      age: payload["age"],

      updatedAt: new Date(),
    };
    const id = req.query.id;
    await db.profiles.update(data , { where: { id: id } });
    res.json({message:`successfully updated`});
  });
  router.delete("/", async (req, res) => {
    const id = req.query.id;
    await db.profiles.destroy({ where: { id: id } });
    res.json({message:`successfully deleted`});
  });

  return router;
};
