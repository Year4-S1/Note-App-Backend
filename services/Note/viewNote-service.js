const Note = require("../../models/note-model");

const viewNotes = async (req, res) => {
  await Note.find({})
    .sort({ noteDate: -1 })
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const viewNotesByUserId = async (req, res) => {
  await Note.find({ token: req.params.id })
    .sort({ noteDate: -1 })
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const viewNotesByCategoryId = async (req, res) => {
  await Note.find({ categoryId: req.params.id })
    .sort({ noteDate: -1 })
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const viewNoteById = async (req, res) => {
  if (req.params && req.params.id) {
    await Note.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  viewNotes,
  viewNoteById,
  viewNotesByUserId,
  viewNotesByCategoryId,
};
