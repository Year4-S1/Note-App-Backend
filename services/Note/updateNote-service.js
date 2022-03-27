const Note = require("../../models/note-model");

const updateNote = async (req, res) => {
  if (!req.is("application/json")) {
    res.send(400);
  } else {
    Note.findByIdAndUpdate(
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
      { upsert: true },
      function (err, result) {
        if (err) {
          res.status(500).send(body);
        } else {
          res.status(200).send(result);
        }
      }
    );
  }

  // console.log(datanew);

  // .then((datanew) => {
  //   console.log(datanew);
  //   if (datanew) {
  //     res.status(200).send({ data: datanew });
  //   } else {
  //     res.status(500).send({ error: "Not Updated" });
  //   }
  // })
  // .catch((error) => {
  //   res.status(500).send({ error: error.message });
  // });
};

module.exports = {
  updateNote,
};
