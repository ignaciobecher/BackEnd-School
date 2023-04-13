const express = require("express");
const router = express.Router();
const { encrypt, comparePasswords } = require("../utils/handlePassword");
const {
  registerUser,
  loginController,
  getUsers,
} = require("../controllers/usersController");
const { authRoute } = require("../middlewares/validateAuth");

router.post("/register", registerUser);
router.post("/login", loginController);
router.get("/getUsersController", getUsers);

module.exports = router;
