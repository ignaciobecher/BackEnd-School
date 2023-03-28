const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const usersModel = mongoose.model("users", UserScheme);
module.exports = { usersModel, UserScheme };
