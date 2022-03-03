const Category = require("../models/category-model");

const updateCategory = async (req, res) => {
  await Category.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        userId: req.body.userId,
        categoryName: req.body.categoryName,
        categoryColor: req.body.categoryColor,
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
  updateCategory,
};
