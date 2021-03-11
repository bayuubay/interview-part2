const router = require("express").Router();
const db = require("../models");

module.exports = function mainApp() {
  router.get("/", async (req, res) => {
    const usersModel = db.users;
    const profileModel = db.profiles;

    profileModel.hasMany(usersModel);
    usersModel.belongsTo(profileModel, { foreignKey: "profileId" });

    const user = await usersModel.findAll({
      attributes: ["id", "fullName"],
      include: [
        {
          model: profileModel,
          attributes: ["gender", "age"],
        },
      ],
    });

    // const user = await db.users.findAll({});
    res.json({ message: "success get data user", user });
  });
  router.post("/", async (req, res) => {
    const fullName = req.body["fullName"];
    const profileId = req.body["profileId"];
    await db.users.create({
      profileId: profileId,
      fullName: fullName,
      cratedAt: new Date(),
      updatedAt: new Date(),
    });
    res.json({ message: "success get data user", fullName });
  });
  router.put("/", async (req, res) => {
    const payload = req.body;
    const profileId = payload["profileId"];
    const fullName = payload["fullName"];
    const id = req.query.id;
    await db.users.update(
      { fullName: fullName, profileId: profileId },
      { where: { id: id } }
    );
    res.json({ message: "success update data user" });
  });
  router.delete("/", async (req, res) => {
    const id = req.query.id;
    await db.users.destroy({ where: { id: id } });
    res.json({ message: "success delete data user" });
  });

  return router;
};
