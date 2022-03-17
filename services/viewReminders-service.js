const Reminder = require("../models/reminder-model");

const viewNotifications = async (req, res) => {
  await Reminder.find({})
    .sort({ reminderDate: -1 })
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const viewNotificationById = async (req, res) => {
  if (req.params && req.params.id) {
    await Reminder.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  viewNotificationById,
  viewNotifications,
};
