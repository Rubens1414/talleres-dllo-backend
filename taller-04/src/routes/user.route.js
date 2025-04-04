const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
//Punto 1
router.get("/:hobby/hobby", userController.getUsersByHobby);
//Punto 2
router.get("/:id/exists", userController.checkUserExists);
//Punto 3
router.get("/:hobby/hobby/count", userController.countUsersByHobby);
//Punto 4
router.get("/is-free", userController.getUsersWithLessThanThreeHobbies);
//Punto 5
router.get("/:id/suggest/:hobby", userController.suggestHobby);
//Punto 6
router.post("/", userController.createUser);

module.exports = router;

