const Category = require("../../models/category-model");

const createCategory = async (req, res) => {
  if (req.body) {
    let category = new Category();
    const container = req.body.data;

    let arr = container.data;

    let count = Object.entries(arr).length;

    let x = 0;
    for (const [key, value] of Object.entries(arr)) {
      x++;
      let category = new Category({
        userId: container.id,
        categoryName: key,
        categoryColor: value,
      });

      await category
        .save()
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
  createCategory,
};
