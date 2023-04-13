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

    grade: [
      {
        type: mongoose.Types.ObjectId,
        ref: "grades",
      },
    ],
    schoolThatBelongs: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "schools",
      unique: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const studentsModel = mongoose.model("students", StudentScheme);
module.exports = { studentsModel, StudentScheme };
