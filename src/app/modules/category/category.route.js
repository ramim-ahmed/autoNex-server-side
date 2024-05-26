const express = require("express");
const { categoryController } = require("./category.controller");
const router = express.Router();

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getSingleCategory);
router.post("/create-new", categoryController.createNew);
router.patch("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports.categoryRoutes = router;
