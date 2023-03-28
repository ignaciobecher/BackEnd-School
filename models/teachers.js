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
    unique: true,
  },
});

const teachersModel = mongoose.model("teachers", TeacherSchema);
module.exports = { teachersModel, TeacherSchema };
