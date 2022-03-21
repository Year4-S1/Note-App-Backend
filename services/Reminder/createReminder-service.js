const Reminder = require("../../models/reminder-model");
require("date-utils");

const createReminder = async (req,res) => {
  if (req.body) {
    const reminder = new Reminder(req.body);
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