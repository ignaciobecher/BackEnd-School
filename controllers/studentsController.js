const { studentsModel } = require("../models/students");

const getStudents = async (req, res) => {
  try {
    const data = await studentsModel.find({}).populate("schoolThatBelongs");
    res.send({ data });
  } catch (error) {
    console.log(error);
  }
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
  try {
    const { id } = req.params;
    const data = await studentsModel
      .findById({ _id: id })
      .populate("schoolThatBelongs");
    res.send({ data });
  } catch (error) {
    console.log(error);
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req; //falta school thatBelongs
    const updatedStudent = await studentsModel.findByIdAndUpdate(
      { _id: id },
      body
    );
    res.send(updatedStudent);
  } catch (error) {
    console.log(error);
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const deletedStudent = await studentsModel.deleteOne({ _id: id });
  res.send(deletedStudent);
  console.log("Estudiante eliminado");
};

module.exports = {
  getStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
