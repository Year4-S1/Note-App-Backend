const pushNotifications = require("../services/Notifications/notifications-service");
const express = require("express");
const router = express.Router();


module.exports = function () {
  router.get("/send", pushNotifications.sendNotifications);
  router.post("/device/send", pushNotifications.sendNotificationsToDevice);
  return router;
}; 