const express = require("express");
const router = express.Router();
const { encrypt, comparePasswords } = require("../utils/handlePassword");
const {
  registerUser,
  loginController,
  getUsers,
  getUser,
  updateUser,
  updateUserSubject,
} = require("../controllers/usersController");
const { authRoute } = require("../middlewares/validateAuth");

router.post("/register", registerUser);
router.post("/login", loginController);
router.get("/usersShow", getUsers);
router.get("/userHome/:id", getUser);
router.put("/userData/:id", updateUser);
router.put("/addSubject/:id", updateUserSubject);

module.exports = router;
