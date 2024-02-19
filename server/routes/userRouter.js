const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
// const userValidator = require("../validators/userValidator")

router.get("/users", userController.getAllUsers);
router.get("/search-users", userController.getSearchUsers);
router.get("/users/:userId", userController.getSingleUser);
router.post("/add-user", userController.addUser);
router.patch("/update-user/:userId", userController.updateUser);
router.delete("/delete-user/:userId", userController.deleteUser);
router.get("/download-users-data", userController.downloadAllUsersData);

module.exports = router;
