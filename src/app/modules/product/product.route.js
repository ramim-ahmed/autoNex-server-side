const express = require("express");
const { productController } = require("./product.controller");
const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getSingleProduct);
router.post("/create-new", productController.createNew);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports.productRoutes = router;
