const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "users",
  },
  categoryName: { type: String, required: false, trim: true },
  categoryColor: { type: String, required: false, trim: true },
});

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;
