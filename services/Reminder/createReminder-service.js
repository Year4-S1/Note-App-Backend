const Reminder = require("../../models/reminder-model");

require("date-utils");

const createReminder = async (req,res) => {
  if (req.body) {
    const reminder = new Reminder();
    reminder.userId = req.body.userId;
    reminder.reminderTittle = req.body.reminderTittle;
    reminder.categoryColor = req.body.categoryColor;
    reminder.reminderMessage = req.body.reminderMessage;
    reminder.reminderDate = req.body.reminderDate;
    reminder.reminderTime = req.body.reminderTime;
    await reminder
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
}

const createReminderwithActiveStatus = async (req,res) => {
  if (req.body) {
    const reminder = new Reminder();
    reminder.userId = req.body.userId;
    reminder.reminderTittle = req.body.reminderTittle;
    reminder.categoryColor = req.body.categoryColor;
    reminder.reminderMessage = req.body.reminderMessage;
    reminder.reminderDate = req.body.reminderDate;
    reminder.reminderTime = req.body.reminderTime;
    reminder.activeStatus = req.body.activeStatus;
    await reminder
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
  createReminderwithActiveStatus,
};