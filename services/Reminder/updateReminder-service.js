const Reminder = require("../../models/reminder-model");

const updateReminder = async (req, res) => {
  await Reminder.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        userId: req.body.userId,
        reminderTitle: req.body.reminderTitle,
        reminderMessage: req.body.reminderMessage,
        reminderTime: req.body.reminderTime,
        reminderDate: req.body.reminderDate,
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
