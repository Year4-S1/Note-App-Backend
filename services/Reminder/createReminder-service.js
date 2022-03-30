const Reminder = require("../../models/reminder-model");

require("date-utils");

const createReminder = async (req,res) => {
  if (req.body) {
    const reminder = new Reminder();
    reminder.userId = req.body.userId;
    reminder.reminderTitle = req.body.reminderTitle;
    reminder.categoryColor = req.body.categoryColor;
    reminder.reminderMessage = req.body.reminderMessage;
    reminder.reminderDate = req.body.reminderDate;
    reminder.reminderTime = req.body.reminderTime;
    reminder.activeStatus = true;
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
};