const { Router } = require("express");
const Artist = require("../models").artist;
const Tag = require("../models").tag;
const Artwork = require("../models").artwork;
const Location = require("../models").location;

//instantiate:
const router = new Router();

//Get all artists:
router.get("/", async (req, res, next) => {
  console.log("Got to artists!");
  try {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
    const allArtists = await Artist.findAll(); //.findAll({ limit, offset }); //;
    res.json({ allArtists });
  } catch (e) {
    next(e);
  }
});

//Get one artist by id:
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Artist id is not a number!" });
  }

  const artist = await Artist.findByPk(id, {
    include: [
      { model: Tag },
      { model: Artwork, include: [{ model: Location }] },
    ],
  });

  if (artist === null) {
    return res.status(404).send({ message: "Artist not found" });
  }

  res.status(200).send({ message: "ok", artist });
});

//Add a new artist:
router.post("/create_new", async (req, res, next) => {
  const {
    firstName,
    lastName,
    knownAs,
    bornOn,
    diedOn,
    placeOfBirth,
    placeOfDeath,
    nationality,
    wikiUrl,
    gender,
  } = req.body;
  try {
    const newArtist = await Artist.create({
      firstName,
      lastName,
      knownAs,
      bornOn,
      diedOn,
      placeOfBirth,
      placeOfDeath,
      nationality,
      wikiUrl,
      gender,
    });
    res.status(201).json({
      newArtist,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
