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
  studentId: {
    type: mongoose.Types.ObjectId,
    ref: "students",
  },
  schoolId: {
    type: mongoose.Types.ObjectId,
    ref: "schools",
  },
  gradesId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "grades",
    },
  ],
  userSchool: [
    {
      type: mongoose.Types.ObjectId,
      ref: "schools",
    },
  ],
});

const usersModel = mongoose.model("users", UserScheme);
module.exports = { usersModel, UserScheme };
