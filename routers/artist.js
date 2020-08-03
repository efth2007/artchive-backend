const { Router } = require("express");
const Artist = require("../models").artist;
const Tag = require("../models").tag;
const Artwork = require("../models").artwork;
const Location = require("../models").location;
const UserArtist = require("../models").userArtist;

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

//Add an artist to favorites:
router.post("/add_to_favorites", async (req, res, next) => {
  const userId = parseInt(req.body.userId);
  const artistId = parseInt(req.body.artistId);

  try {
    const newFavorite = await UserArtist.create({
      userId,
      artistId,
    });

    const favedArtist = await Artist.findByPk(artistId);

    res.status(201).json({
      favedArtist,
    });
    // console.log("the userId to add:", userId);
    //  console.log("the artistId to add:", artistId);
  } catch (e) {
    next(e);
  }
});

router.delete("/remove_from_favorites/:uId/:aId", async (req, res, next) => {
  // const userId = parseInt(req.body.userId);
  // const artistIdA = req.body.artistId;

  const userId = parseInt(req.params.uId);
  const artistId = parseInt(req.params.aId);

  try {
    const faveToDelete = await UserArtist.findOne({
      where: { userId, artistId },
    });
    // console.log("HEEEYYYYYY IM DELETINGGG");
    // if (!faveToDelete) {
    //    return res.status(404).send("Fave not found");
    //   }
    //  console.log("Found the fave, i'm gonna delete it now");
    const result = await faveToDelete.destroy();

    const artistRemoved = await Artist.findByPk(artistId);

    console.log("Favorite deleted", result);

    res.status(201).json({
      artistRemoved,
    });

    // send back the deleted artistId.

    console.log("the userId to remove:", userId);
    console.log("the artistId to remove:", artistIdA);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
