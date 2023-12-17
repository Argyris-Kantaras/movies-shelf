const { Bookmark } = require("../models/bookmarks");
const router = require("express").Router();

router.post("/saved-bookmarks", async (req, res) => {
  if (req.body.email === "") res.status(400).send("Not Signed in");
  let bookmark = await Bookmark.find({ userEmail: req.body.email });
  res.status(200).send(bookmark);
});

module.exports = router;
