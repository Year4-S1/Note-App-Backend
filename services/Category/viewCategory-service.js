const { promise } = require("bcrypt/promises");
const Category = require("../../models/category-model");
const Note = require("../../models/note-model");

// var categoryNoteCount = new Map();

const viewCategory = async (req, res) => {
  await Category.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

async function getNoteCount(userId, categoryColor) {
  const query = {
    $and: [{ userId: userId }, { categoryColor: categoryColor }],
  };

  let noteCount = await Note.find(query).count();

  // categoryNoteCount.set(categoryColor, noteCount);
  // console.log("Note : " + noteCount);
  // console.log("Note Map :" + categoryNoteCount);
  return noteCount;
  // .then((data) => {
  //   console.log("Result : " + data);
  //   return data;
  //   // categoryNoteCount[data[i].categoryColor] = result;
  //   // categoryNoteCount.set(categoryColor, noteCount);
  //   // console.log(categoryNoteCount);
  // });
}

const viewCategoryByUseId = async (req, res) => {
  var query = { userId: req.params.id };

  await Category.find({ userId: req.params.id })

    .then((data) => {
      // console.log(data.length);
      let filterData = [];
      var categoryNoteCount = new Map();
      let result = 0;
      let resCat = [];

      for (let i = 0; i < data.length; i++) {
        let noteCount = {};

        if (data[i].categoryName != "") {
          filterData.push(data[i]);
        }

        // (async () => {
        //   result = await getNoteCount(data[i].userId, data[i].categoryColor);
        //   color = data[i].categoryColor;
        //   console.log("Function return :" + result);

        //   Object.assign(resCat, { color: result });

        //   // categoryNoteCount.set(data[i].categoryColor, result);
        //   console.log(resCat);
        // })();

        // result = await getNoteCount(data[i].userId, data[i].categoryColor);
        // console.log("Result N : " + result);
        const query = {
          $and: [
            { userId: data[i].userId },
            { categoryColor: data[i].categoryColor },
          ],
        };

        noteCount = Note.find(query)
          .count()
          .then((result) => {
            console.log(data[i].categoryColor + " : " + result);
            // categoryNoteCount[data[i].categoryColor] = result;
            categoryNoteCount.set(data[i].categoryColor, result);
            console.log(categoryNoteCount);
            return result;
          });
        // console.log(noteCount);
        console.log(data[i].categoryColor + " : " + noteCount);
        // categoryNoteCount.set(data[i].categoryColor, result);
      }
      console.log("New" + categoryNoteCount.size);
      console.log("Res" + resCat);
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
