const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  teacher: {
    type: String,
  },
  class: {
    type: String,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "schools",
    required: true,
  },
});

const subjectModel = mongoose.model("subjects", subjectSchema);
module.exports = { subjectModel, subjectSchema };
