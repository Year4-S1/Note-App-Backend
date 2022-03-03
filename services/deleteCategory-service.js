const Category = require("../models/category-model");

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

module.exports = {
  deleteCategory,
};
