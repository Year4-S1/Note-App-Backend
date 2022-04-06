const express = require("express");
const router = express.Router();
const addFavorite = require("../services/Favorite/add-favorite");
const getFavorites = require("../services/Favorite/get-favorites");

module.exports = function () {
  router.post("/add", addFavorite.addFavorite);
  router.get("/get", getFavorites.getFavorites);
  router.get("/getone", getFavorites.getOneFav);

  return router;
};
