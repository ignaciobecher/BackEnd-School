const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  collegeDegree: {
    type: String,
  },
  classInCharge: {
    type: String,
  },
  email: {
    type: String,
  },
  schoolId: {
    type: mongoose.Types.ObjectId,
    ref: "schools",
  },
});

const teachersModel = mongoose.model("teachers", TeacherSchema);
module.exports = { teachersModel, TeacherSchema };
