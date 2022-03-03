const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: false, trim: true },
  password: { type: String, required: false, trim: true },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
