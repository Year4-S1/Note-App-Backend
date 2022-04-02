const express = require("express");
const router = express.Router();

const createNotificationController = require("../services/Reminder/createReminder-service");
const viewNotificationsbyId = require("../services/Reminder/viewReminders-service");
const viewAllNotifications = require("../services/Reminder/viewReminders-service");
const deleteNotificationByID = require("../services/Reminder/deleteReminder-service");
const updateReminder = require("../services/Reminder/updateReminder-service");
const viewReminderByUserID = require("../services/Reminder/viewReminders-service");
const viewReminderByCategoryId = require("../services/Reminder/viewReminders-service");
const updateactiveStatus =  require("../services/Reminder/updateReminder-service");
const getNotification = require("../services/Reminder/viewReminders-service");

module.exports = function () {
  router.post("/create", createNotificationController.createReminder);
  router.put("/update/active/:id", updateactiveStatus.updateReminderwithActiveStatus);
  router.get("/view/:id", viewNotificationsbyId.viewNotificationById);
  router.get("/", viewAllNotifications.viewNotifications);
  router.put("/update/:id",updateReminder.updateReminder);
  router.delete("/delete/:id", deleteNotificationByID.deleteNotification);
  router.get("/userid/:id", viewReminderByUserID.viewReminderByUserId);
  router.get("/category/:id", viewReminderByCategoryId.viewRemindersByCategoryId);
  router.get("/notification/send/:id",getNotification.viewNotificationByUserId);
  return router;
}; 
