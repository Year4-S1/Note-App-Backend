const express = require("express");
const router = express.Router();

const createCategoryController = require("../services/createCategory-service");
const viewCategoryController = require("../services/viewCategory-service");
const updateCategoryController = require("../services/updateCatergory-service");
const deleteCategoryController = require("../services/deleteCategory-service");

module.exports = function () {
  router.post("/create", createCategoryController.createCategory);
  router.get("/", viewCategoryController.viewCategory);
  router.get("/:id", viewCategoryController.viewCategoryByUseId);
  router.put("/updatecategory/:id", updateCategoryController.updateCategory);
  router.delete("/deletecategory/:id", deleteCategoryController.deleteCategory);
  return router;
};
