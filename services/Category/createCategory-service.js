const Category = require("../../models/category-model");

const createCategory = async (req, res) => {
  if (req.body) {
    let category = new Category();
    const container = req.body;
    console.log(container.userId);

    let arr = container.data;
    console.log(arr);

    Object.entries(arr).forEach(([key, value]) => {
      console.log(key, value);

      let category = new Category({
        userId: container.userId,
        categoryName: key,
        categoryColor: value,
      });
      category
        .save()
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
    });

    //const category =

    //const arr = [req.body];
    // const catergories = new Category();
    // catergories = container.map((item) => ({
    //   token: item.token,
    //   categoryColor: item.data.categoryColor[0],
    //   categoryName: item.data.categoryName[1],
    // }));

    // await catergories
    //   .save()
    //   .then((data) => {
    //     res.status(200).send({ data: data });
    //   })
    //   .catch((error) => {
    //     res.status(500).send({ error: error.message });
    //   });
  }
};

module.exports = {
  createCategory,
};
