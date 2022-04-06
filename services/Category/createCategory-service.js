const Category = require("../../models/category-model");

const createCategory = async (req, res) => {
  if (req.body) {
    let category = new Category();
    const container = req.body;

    let arr = container.data;

    let count = Object.entries(arr).length;

    let x = 0;
    for (const [key, value] of Object.entries(arr)) {
      x++;
      let category = new Category({
        userId: container.id,
        categoryName: value,
        categoryColor: key,
      });

      const query = {
        $and: [{ userId: container.id }, { categoryColor: key }],
      };
      const catergoryExist = await Category.find(query);

      if (catergoryExist.length == 0) {
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
      } else {
        await Category.findOneAndUpdate(query, {
          $set: {
            categoryName: value,
          },
        })
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
  }
};

module.exports = {
  createCategory,
};
