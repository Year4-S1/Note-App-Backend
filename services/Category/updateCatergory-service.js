const Category = require("../../models/category-model");

const updateCategory = async (req, res) => {
  let userId = await Category.find({ userId: req.params.id });
  console.log(userId);

  if (userId) {
    let category = new Category();
    const container = req.body;

    let arr = container,
      data;
    console.log(container);

    let x = 0;
    for (const [key, value] of Object.entries(arr)) {
      x++;
      let category = new Category({
        userId: container.id,
        categoryName: key,
        categoryColor: value,
      });

      await Category.findOneAndUpdate(
        { categoryColor: req.body.categoryColor },
        {
          $set: {
            //userId: req.body.userId,
            categoryName: req.body.categoryName,
            //categoryColor: req.body.categoryColor,
          },
        }
        //{ upsert: true }
      )
        .then((data) => {
          if (x == count) {
            return res.status(200).send({ message: "success" });
          }
        })
        .catch((error) => {
          return res.status(500).send({ error: error.message });
        });
    }

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
