const { Bookmark } = require("../models/bookmarks");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/bookmarks", async (req, res) => {
  let bookmark = await Bookmark.findOne({ id: req.body.id });
  if (bookmark) {
    bookmark.deleteOne({ id: req.body.id });
  } else {
    try {
      const bookmark = new Bookmark({
        userEmail: req.body.userEmail,
        id: req.body.id,
        ...req.body,
      });
      if (req.body.userEmail === "") {
        return res.status(400).send("Not Signed in");
      } else {
        await bookmark.save();
      }
      return res.status(201).json(bookmark);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
});

module.exports = router;
