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
  let filterData = [];
  var categoryNoteCount = new Map();
  let result = 0;
  let resCat = [];
  let noteCount = {};
  let uid = req.params.id;
  let clrArr=[];

  await Category.find({ userId: req.params.id })

    .then((data) => {

      for (let i = 0; i < data.length; i++) {

        if (data[i].categoryName != "") {
          filterData.push(data[i]);
        }

        clrArr.push(data[i].categoryColor);
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
            { },
            {  },
          ],
        };
      }


      // console.log(clrArr);


      for(let i = 0; i< clrArr.length; i++){
      noteCount = Note.find({ userId: uid,categoryColor: clrArr[i]})
          .count()
          .then((result) => {
            // console.log(data[i].categoryColor + " : " + result);
            // categoryNoteCount[data[i].categoryColor] = result;
            categoryNoteCount.set(clrArr[i], result);
            // console.log(categoryNoteCount);
            return categoryNoteCount;
          });
        }

      // console.log("New" + categoryNoteCount.size);
      console.log("Res " + categoryNoteCount);
      console.log("Res " + noteCount);
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
