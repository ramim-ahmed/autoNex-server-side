const express = require("express");
const { userController } = require("./user.controller");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/create-new", userController.createUser);
router.patch("/make-admin/:id", userController.makeAdmin);

module.exports.userRoutes = router;
