const express = require("express");
const router = express.Router();
const { encrypt, comparePasswords } = require("../utils/handlePassword");
const { registerUser } = require("../controllers/usersController");

router.post("/", registerUser);

module.exports = router;
