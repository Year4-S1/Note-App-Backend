const express = require("express");
const router = express.Router();

const addUserController = require("../services/addUser-service");

module.exports = function () {
  router.post("/create", addUserController.addUser);
  return router;
};
