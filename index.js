const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const artistRouter = require("./routers/artist");
const artworkRouter = require("./routers/artwork");
const userRouter = require("./routers/user");

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
app.get("/", (req, res) => res.send("Hello!!"));

app.use("/artists", artistRouter);
app.use("/artworks", artworkRouter);
app.use("/users", userRouter);
