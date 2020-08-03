const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const authRouter = require("./routers/auth");
const artistRouter = require("./routers/artist");
const artworkRouter = require("./routers/artwork");
const userRouter = require("./routers/user");
const locationRouter = require("./routers/location");

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.listen(process.env.PORT || 4000, () =>
  console.log(`Listening on port ${PORT}!`)
);
app.get("/", (req, res) => res.send("Hello!!"));

app.use("/", authRouter);
app.use("/artists", artistRouter);
app.use("/artworks", artworkRouter);
app.use("/users", userRouter);
app.use("/locations", locationRouter);
