const Reminder = require("../../models/reminder-model");

const updateReminder = async (req, res) => {
  if (!req.is("application/json")) {
    res.send(400);
  } else {
    Reminder.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          categoryColor: req.body.categoryColor,
          reminderTittle: req.body.reminderTittle,
          reminderMessage: req.body.reminderMessage,
          reminderDate: req.body.reminderDate,
          reminderTime: req.body.reminderTime,
        },
      },
      { upsert: true },
      function (err, result) {
        if (err) {
          res.status(500).send(body);
        } else {
          res.status(200).send(result);
        }
      }
    );
  }
};

module.exports = {
  updateReminder,
};
