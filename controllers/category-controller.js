const express = require("express");
const router = express.Router();

const createCategoryController = require("../services/Category/createCategory-service");
const viewCategoryController = require("../services/Category/viewCategory-service");
const updateCategoryController = require("../services/Category/updateCatergory-service");
const deleteCategoryController = require("../services/Category/deleteCategory-service");

module.exports = function () {
  router.post("/create", createCategoryController.createCategory);
  router.get("/", viewCategoryController.viewCategory);
  router.get("/:id", viewCategoryController.viewCategoryByUseId);
  router.put("/updatecategory/:id", updateCategoryController.updateCategory);
  router.put(
    "/updatecatergorynamenull/:id",
    deleteCategoryController.deleteCategoryMakeNull
  );
  router.delete("/deletecategory/:id", deleteCategoryController.deleteCategory);
  return router;
};
