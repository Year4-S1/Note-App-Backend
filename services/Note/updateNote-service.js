const read = require("body-parser/lib/read");
const { callbackPromise } = require("nodemailer/lib/shared");
const Note = require("../../models/note-model");

const updateNote = async (req, res) => {
  let datanew = {};

  datanew = await Note.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        categoryColor: req.body.categoryColor,
        noteTitle: req.body.noteTitle,
        noteMessage: req.body.noteMessage,
        noteDate: new Date().toLocaleDateString(),
        noteTime: new Date().toTimeString(),
      },
    },
    { new: true }
  )

    // console.log(datanew);

    .then((datanew) => {
      console.log(datanew);
      if (datanew) {
        res.status(200).send({ data: datanew });
      } else {
        res.status(500).send({ error: "Not Updated" });
      }
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = {
  updateNote,
};
