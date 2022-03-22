const Category = require("../../models/category-model");

const updateCategory = async (req, res) => {
  let userId = await Category.find({ userId: req.params.id });
  console.log(userId);

  if (userId) {
    let category = new Category();
    const container = req.body.data;

    let arr = container;
    console.log(container);

    // await Category.findOneAndUpdate(
    //   { categoryColor: req.body.categoryColor },
    //   {
    //     $set: {
    //       //userId: req.body.userId,
    //       categoryName: req.body.categoryName,
    //       //categoryColor: req.body.categoryColor,
    //     },
    //   }
    //   //{ upsert: true }
    // )
    //   .then((data) => {
    //     res.status(200).send({ data: data });
    //   })
    //   .catch((error) => {
    //     res.status(500).send({ error: error.message });
    //   });
  }
};

module.exports = {
  updateCategory,
};
