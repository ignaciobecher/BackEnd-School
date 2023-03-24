const mongoose = require("mongoose");

const StudentScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    age: {
      type: Number,
    },
    course: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  { timestamps: true, versionKey: false }
);

const studentsModel = mongoose.model("students", StudentScheme);
module.exports = { studentsModel, StudentScheme };
