const { Router } = require("express");
const Artist = require("../models").artist;

//instantiate:
const router = new Router();

//
router.get("/", async (req, res, next) => {
  console.log("Got to artists!");
  try {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
    const allArtists = await Artist.findAll({ limit, offset });
    res.json({ allArtists });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
