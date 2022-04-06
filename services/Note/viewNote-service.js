const Note = require("../../models/note-model");

const viewNotes = async (req, res) => {
  await Note.find({})
    .sort({ noteTime: -1 })
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const viewNotesByUserId = async (req, res) => {
  await Note.find({ userId: req.params.id })
    .sort({ noteTime: -1 })
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const viewNotesByCategoryId = async (req, res) => {
  await Note.find({ categoryColor: req.params.id })
    .sort({ noteTime: -1 })
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

// const getNoteCountPerCategory = async (req, res) => {

//   await Order.find({ status: "ACCEPTED" })
//     .count()
//     .then((data) => {
//       res.status(200).send({ data: data });
//     })
//     .catch((error) => {
//       res.status(500).send({ error: error.message });
//     });
// };

module.exports = {
  viewNotes,
  viewNoteById,
  viewNotesByUserId,
  viewNotesByCategoryId,
};
