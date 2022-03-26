const { promise } = require("bcrypt/promises");
const Category = require("../../models/category-model");
const Note = require("../../models/note-model");

const viewCategory = async (req, res) => {
  await Category.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const forLoop = async (data, res, uid) => {
  const filterData = [];
  let categoryDetails = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].categoryName != "" || data[i].categoryColor == "unassigned") {
      const query = {
        $and: [{ userId: uid }, { categoryColor: data[i].categoryColor }],
      };
      let noteCount = await Note.find(query)
        .count()
        .then((noteCount) => {
          categoryDetails = {
            id: data[i].id,
            userId: uid,
            categoryName: data[i].categoryName,
            categoryColor: data[i].categoryColor,
            noteCount: noteCount,
          };

          filterData.push(categoryDetails);
        });
    }
  }

  res.status(200).send({ data: filterData });
};

const viewCategoryByUseId = async (req, res) => {
  let uid = req.params.id;
  let clrArr = [];

  await Category.find({ userId: req.params.id })

    .then((data) => {
      forLoop(data, res, uid);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = {
  viewCategory,
  viewCategoryByUseId,
};
