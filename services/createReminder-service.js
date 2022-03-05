const Reminder = require("../models/reminder-model");
require("date-utils");

const createReminder = async (req,res) => {
  if (req.body) {
    const notification = new Reminder();
    notification.notificationID = req.body.userId;
    notification.reminderTittle = req.body.reminderTittle;
    notification.reminderMessage = req.body.reminderMessage;
    notification.reminderDate = new Date().toLocaleDateString();
    notification.reminderTime = new Date().toTimeString();
    await note
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
}
module.exports = {
  createReminder,
};