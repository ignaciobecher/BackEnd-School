const { studentsModel } = require("../models/students");
const mongoose = require("mongoose");

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
module.exports = { getStudents, createStudent, getStudent, updateStudent };
