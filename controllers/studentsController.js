const { studentsModel } = require("../models/students");

const getStudents = async (req, res) => {
  const data = await studentsModel.find({});
  res.send({ data });
};

const createStudent = async (req, res) => {
  try {
    const { body } = req;

    const data = await studentsModel.create(body);
    res.send({ data: body });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req, res) => {
  const { id } = req.params;
  const data = await studentsModel.findById({ _id: id });
  res.send({ data });
};
module.exports = { getStudents, createStudent, getStudent };
