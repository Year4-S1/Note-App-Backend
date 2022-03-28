const express = require("express");
const router = express.Router();

const createNotificationController = require("../services/Reminder/createReminder-service");
const viewNotificationsbyId = require("../services/Reminder/viewReminders-service");
const viewAllNotifications = require("../services/Reminder/viewReminders-service");
const deleteNotificationByID = require("../services/Reminder/deleteReminder-service");
const updateReminder = require("../services/Reminder/updateReminder-service");
const viewReminderByUserID = require("../services/Reminder/viewReminders-service");
const viewReminderByCategoryId = require("../services/Reminder/viewReminders-service");

module.exports = function () {
  router.post("/create", createNotificationController.createReminder);
  router.get("/view/:id", viewNotificationsbyId.viewNotificationById);
  router.get("/", viewAllNotifications.viewNotifications);
  router.put("/update/:id",updateReminder.updateReminder);
  router.get("/delete/:id", deleteNotificationByID.deleteNotification);
  router.get("/userid/:id", viewReminderByUserID.viewReminderByUserId);
  router.get("/category/:id", viewReminderByCategoryId.viewRemindersByCategoryId);
  return router;
}; 
