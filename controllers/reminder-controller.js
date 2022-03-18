const express = require("express");
const router = express.Router();

const createNotificationController = require("../services/createReminder-service");
const viewNotificationsbyId = require("../services/viewReminders-service");
const viewAllNotifications = require("../services/viewReminders-service");
const deleteNotificationByID = require("../services/deleteReminder-service");

module.exports = function () {
  router.post("/create", createNotificationController.createReminder);
  router.get("/view/:id", viewNotificationsbyId.viewNotificationById);
  router.get("/", viewAllNotifications.viewNotifications);
  router.get("/delete/:id", deleteNotificationByID.deleteNotification);

  return router;
};
