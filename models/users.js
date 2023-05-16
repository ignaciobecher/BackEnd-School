const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: ["user", "admin"],
    default: "user",
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  age: {
    type: Number,
  },
  userSchool: [
    {
      type: mongoose.Types.ObjectId,
      ref: "schools",
    },
  ],
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subjects",
    },
  ],
});

const usersModel = mongoose.model("users", UserScheme);
module.exports = { usersModel, UserScheme };
