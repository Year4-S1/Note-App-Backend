const Note = require("../../models/note-model");

const updateNote = async (req, res) => {
  await Note.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        categoryId: req.body.categoryId,
        noteTitle: req.body.noteTitle,
        noteMessage: req.body.noteMessage,
        noteDate: new Date().toLocaleDateString(),
        noteTime: new Date().toTimeString(),
      },
    },
    { upsert: true }
  )
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = {
  updateNote,
};
