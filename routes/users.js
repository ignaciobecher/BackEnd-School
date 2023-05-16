const express = require("express");
const router = express.Router();
const { encrypt, comparePasswords } = require("../utils/handlePassword");
const {
  registerUser,
  loginController,
  getUsers,
  getUser,
  updateUser,
  removeSubjectFromUser,
  addSubjectToUser,
} = require("../controllers/usersController");
const { authRoute } = require("../middlewares/validateAuth");

router.post("/register", registerUser);
router.post("/login", loginController);
router.get("/usersShow", getUsers);
router.get("/userHome/:id", getUser);
router.put("/userData/:id", updateUser);
router.post("/addSubject/:id", addSubjectToUser);
router.delete("/removeSubject/:id", removeSubjectFromUser);

module.exports = router;
