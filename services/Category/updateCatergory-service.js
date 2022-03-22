const Category = require("../../models/category-model");

const updateCategory = async (req, res) => {
  let userId = await Category.find({ userId: req.params.id });
  console.log(userId);

  if (userId) {
    const container = req.body;

    let arr = container.data;

    let count = Object.entries(arr).length;
    let x = 0;

    for (const [key, value] of Object.entries(arr)) {
      x++;

      await Category.findOneAndUpdate(
        { categoryColor: key },
        {
          $set: {
            categoryName: value,
          },
        }
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
  }
};

module.exports = {
  updateCategory,
};
