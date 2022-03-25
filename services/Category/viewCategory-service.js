const Category = require("../../models/category-model");

const viewCategory = async (req, res) => {
  await Category.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const viewCategoryByUseId = async (req, res) => {
  var query = { userId: req.params.id };

  await Category.find({ userId: req.params.id })

    .then((data) => {
      console.log(data.length);
      let filterData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].categoryName != "") {
          filterData.push(data[i]);
        }
      }
      console.log(filterData);
      const len = filterData.length;
      res.status(200).send({ data: filterData });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = {
  viewCategory,
  viewCategoryByUseId,
};
