const express = require("express");
const router = express.Router();

const createNotificationController = require("../services/Reminder/createReminder-service");
const viewNotificationsbyId = require("../services/Reminder/viewReminders-service");
const viewAllNotifications = require("../services/Reminder/viewReminders-service");
const deleteNotificationByID = require("../services/Reminder/deleteReminder-service");
const updateReminder = require("../services/Reminder/updateReminder-service");

module.exports = function () {
  router.post("/create", createNotificationController.createReminder);
  router.get("/view/:id", viewNotificationsbyId.viewNotificationById);
  router.get("/", viewAllNotifications.viewNotifications);
  router.put("/update",updateReminder.updateReminder);
  router.get("/delete/:id", deleteNotificationByID.deleteNotification);

  return router;
};
