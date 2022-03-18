const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({
  notificationID: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "notifications",
  },
  reminderTittle: { type: String, required: false, trim: true },
  reminderMessage: { type: String, required: false, trim: true },
  reminderDate: { type: Date, required: false, trim: true },
},{
  timestamps: true,
});

const Reminder = mongoose.model("notifications", ReminderSchema);
module.exports = Reminder;
