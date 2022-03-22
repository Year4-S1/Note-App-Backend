const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "users",
  },
  reminderTittle: { type: String, required: false, trim: true },
  reminderMessage: { type: String, required: false, trim: true },
  reminderDate: { type: Date, required: false, trim: true },
  reminderTime: { type: String, required: false, trim: true },
});

const Reminder = mongoose.model("notifications", ReminderSchema);
module.exports = Reminder;
