const express = require("express");
const router = express.Router();
const createNoteController = require("../services/createNote-service");
const viewNoteController = require("../services/viewNote-service");
const updateNoteController = require("../services/updateNote-service");
const deleteNoteController = require("../services/deleteNote-service");

module.exports = function () {
  router.post("/create", createNoteController.createNote);
  router.get("/", viewNoteController.viewNotes);
  router.get("/viewnote/:id", viewNoteController.viewNoteById);
  router.put("/updatenote/:id", updateNoteController.updateNote);
  router.delete("/deletenote/:id", deleteNoteController.deleteNote);
  return router;
};
