const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/:hobby/hobby", userController.getUsersByHobby);
router.get("/:id/exists", userController.checkUserExists);
router.get("/:hobby/hobby/count", userController.countUsersByHobby);
router.get("/is-free", userController.getUsersWithLessThanThreeHobbies);
router.get("/:id/suggest/:hobby", userController.suggestHobby);
router.post("/", userController.createUser);

module.exports = router;

