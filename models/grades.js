const mongoose = require("mongoose");

const GradesSchema = new mongoose.Schema({
  subject: {
    type: String,
  },
  qualification: {
    type: Number,
  },
  average: {
    type: Number,
  },
  studentId: {
    type: mongoose.Types.ObjectId,
    ref: "students",
  },
});

const gradesModel = mongoose.model("grades", GradesSchema);
module.exports = { gradesModel, GradesSchema };
