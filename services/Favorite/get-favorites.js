
const Favorites = require("../../models/favorites");
const express = require("express");
const { json } = require("express/lib/response");

const getFavorites = async (req, res) => {

  const uid = req.params.userId;

  await Favorites.find({
    $and: [{ userId: uid }, { favoriteStatus: true }],
  }).populate({path:"noteId", strictPopulate:false})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });




}


const getOneFav = async (req, res) => {

  const favorite = req.params.noteId;

  Favorites.find({ noteId: favorite})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });




}

module.exports = {
  getFavorites,
  getOneFav
}