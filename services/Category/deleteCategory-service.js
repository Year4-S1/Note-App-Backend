const Category = require("../../models/category-model");

const deleteCategory = async (req, res) => {
  //check if the req body is empty
  const id = req.params.id;
  console.log(id);

  //delete product data from database
  await Category.findByIdAndDelete(id)
    .then((response) => {
      console.log("Data sucessfully deleted from the mongo db!");

      res.status(200).send(response);

      console.log("Response sent!");
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const deleteCategoryMakeNull = async (req, res) => {
  let userToken = await Category.find({ userId: req.params.id });
  console.log(userToken);

  if (userToken) {
    await Category.findOneAndUpdate(
      { categoryColor: req.body.categoryColor },
      {
        $set: {
          //userId: req.body.userId,
          categoryName: null,
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
  deleteCategory,
  deleteCategoryMakeNull,
};
