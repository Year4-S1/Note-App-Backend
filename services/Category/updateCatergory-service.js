const Category = require("../../models/category-model");

const updateCategory = async (req, res) => {
  let userToken = await Category.find({ token: req.params.id });
  console.log(userToken);

  if (userToken) {
    await Category.findOneAndUpdate(
      { categoryColor: req.body.categoryColor },
      {
        $set: {
          //token: req.body.token,
          categoryName: req.body.categoryName,
          //categoryColor: req.body.categoryColor,
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
  updateCategory,
};
