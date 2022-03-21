const express = require("express");
const router = express.Router();
const createNoteController = require("../services/Note/createNote-service");
const viewNoteController = require("../services/Note/viewNote-service");
const updateNoteController = require("../services/Note/updateNote-service");
const deleteNoteController = require("../services/Note/deleteNote-service");

module.exports = function () {
  router.post("/create", createNoteController.createNote);
  router.get("/", viewNoteController.viewNotes);
  router.get("/userid/:id", viewNoteController.viewNotesByUserId);
  router.get("/category/:id", viewNoteController.viewNotesByCategoryId);
  router.get("/viewnote/:id", viewNoteController.viewNoteById);
  router.put("/updatenote/:id", updateNoteController.updateNote);
  router.delete("/deletenote/:id", deleteNoteController.deleteNote);
  return router;
};
