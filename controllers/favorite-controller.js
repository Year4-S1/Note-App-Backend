const express = require("express");
const router = express.Router();
const addFavorite = require("../services/Favorite/add-favorite");
const getFavorites = require("../services/Favorite/get-favorites");

module.exports = function () {
  router.post("/add", addFavorite.addFavorite);
  router.get("/get/:userId", getFavorites.getFavorites);
  router.get("/getone/:noteId", getFavorites.getOneFav);

  return router;
};
