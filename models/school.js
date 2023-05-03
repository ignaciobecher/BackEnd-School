const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  middleSchool: {
    type: Boolean,
  },
  highSchool: {
    type: Boolean,
  },
  public: {
    type: Boolean,
  },
  private: {
    type: Boolean,
  },
  teachers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "teachers",
    },
  ],
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
});

const schoolModel = mongoose.model("schools", SchoolSchema);
module.exports = { schoolModel, SchoolSchema };
