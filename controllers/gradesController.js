const { gradesModel } = require("../models/grades");
const { studentsModel } = require("../models/students");
const { handleHttpError } = require("../utils/handleHttpError");

const getGrades = async (req, res) => {
  try {
    const data = await gradesModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_GET_GRADES");
  }
};

const createGrades = async (req, res) => {
  try {
    const { body } = req;
    const grade = await gradesModel.create(body);
    const student = await studentsModel.findById(body.studentId);
    if (!student) {
      return handleHttpError(res, "STUDENT_NOT_FOUND");
    }
    student.grade.push(grade._id);
    await student.save();
    res.send(grade);
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_GRADES");
  }
};

const updateGrades = async (req, res) => {
  try {
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_GRADES");
  }
};

const deleteGrades = async (req, res) => {
  try {
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_GRADES");
  }
};

module.exports = { getGrades, createGrades, updateGrades, deleteGrades };
