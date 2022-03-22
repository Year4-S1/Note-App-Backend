const Reminder = require("../../models/reminder-model");

const updateReminder = async (req, res) => {
  let userToken = await Reminder.find({ userId: req.params.id });
  console.log(userToken);

  if (userToken) {
    await Reminder.findOneAndUpdate(
      { reminderDate: req.body.reminderDate,
        reminderTime: req.body.reminderTime },
      {
        $set: {
          //userId: req.body.userId,
          reminderDate: req.body.reminderDate,
          reminderTime: req.body.reminderTime
        },
      }
      //{ upsert: true }
    )
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  updateReminder,
};
