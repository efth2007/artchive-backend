const { Router } = require("express");
const Artwork = require("../models").artwork;
const Location = require("../models").location;

//instantiate:
const router = new Router();

//Get all locations:
router.get("/", async (req, res, next) => {
  console.log("Got to locations!");
  try {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
    const allLocations = await Location.findAll(); //.findAll({ limit, offset }); //;
    res.json({ allLocations });
  } catch (e) {
    next(e);
  }
});

//Get one location by id:
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Location id is not a number!" });
  }

  const location = await Location.findByPk(id, {
    include: [{ model: Artwork }],
  }); //, {
  //  include: [Artwork]
  //  });

  if (location === null) {
    return res.status(404).send({ message: "Location not found" });
  }

  res.status(200).send({ message: "ok", location });
});

module.exports = router;
