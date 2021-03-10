const router = require("express").Router();
const db = require("./models");

module.exports = function mainApp() {
  router.get("/", async (req, res) => {
    const data = await db.users.findAll({ attributes: ["id", "fullName"] });
    res.json({ message: "success get data user", data });
  });
  router.post("/", async (req, res) => {
    const fullName = req.body["fullName"];
    await db.users.create({
      fullName: fullName,
      cratedAt: new Date(),
      updatedAt: new Date(),
    });
    res.json({ message: "success get data user", fullName });
  });
  router.put("/", async (req, res) => {
    const fullName = req.body["fullName"];
    const id = req.body.id;
    await db.users.update({ fullName: fullName }, { where: { id: id } });
    res.send(`successfully updated ${id} with new data: ${fullName}`);
  });
  router.delete("/", async (req, res) => {
    const id = req.query.id;
    await db.users.destroy({ where: { id: id } });
    res.send(`data id : ${id} has beend deleted!`);
  });

  return router;
};
