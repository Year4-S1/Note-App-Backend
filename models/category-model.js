const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  
  categoryName: { type: String, required: true, trim: true },
  categoryColor: { type: String, required: true, trim: true },
});

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;
