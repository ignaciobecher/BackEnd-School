const mongoose = require("mongoose");

const GradeSchema = new mongoose.Schema({
  class: { type: String },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
    unique: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", unique: true },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teachers",
    unique: true,
  },
  grade: { type: Number },
});

const gradesModel = mongoose.model("grades", GradeSchema);
module.exports = { gradesModel, GradeSchema };
