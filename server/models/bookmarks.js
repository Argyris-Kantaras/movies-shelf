const mongoose = require("mongoose");
const bookmarkSchema = new mongoose.Schema([
  {
    userEmail: {
      type: String,
      require: true,
    },
    _id: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
    primaryImage: {
      type: Object,
    },
    titleType: {
      type: Object,
    },
    titleType: {
      type: Object,
    },
    titleText: {
      type: Object,
    },
    originalTitleText: {
      type: Object,
    },
    releaseYear: {
      type: Object,
    },
    releaseDate: {
      type: Object,
    },
  },
]);
const Bookmark = mongoose.model("Bookmark", bookmarkSchema, `bookmarks`);
module.exports.Bookmark = Bookmark;
