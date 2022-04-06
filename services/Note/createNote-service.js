const Note = require("../../models/note-model");
require("date-utils");

const createNote = async (req, res) => {
  if (req.body) {
    const note = new Note();
    note.userId = req.body.userId;
    note.categoryColor = req.body.categoryColor;
    note.noteTitle = req.body.noteTitle;
    note.noteMessage = req.body.noteMessage;
    note.noteDate = new Date().toLocaleDateString();
    note.noteTime = new Date().toTimeString();
    await note
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  createNote,
};
