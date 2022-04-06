const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "users",
  },
  noteId: [{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "notes",
  }],
  favoriteStatus: { type: Boolean, required: false, trim: true },

});

const Favorites = mongoose.model("favorites", FavoriteSchema);
module.exports = Favorites;
