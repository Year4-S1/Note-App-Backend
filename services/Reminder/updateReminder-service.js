const Reminder = require("../../models/reminder-model");

const updateReminder = async (req, res) => {
  await Reminder.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        reminderMessage: req.body.reminderMessage,
        reminderTitle: req.body.reminderTitle,
        reminderDate: req.body.reminderDate,
        reminderTime: req.body.reminderTime,
      },
    },
    { upsert: true }
  )
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = {
  updateReminder,
};
