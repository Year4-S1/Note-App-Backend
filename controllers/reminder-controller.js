const express = require("express");
const router = express.Router();

const createNotificationController = require("../services/createReminder-service");

module.exports = function () {
  router.post("/create", createNotificationController.createReminder);
  return router;
};
