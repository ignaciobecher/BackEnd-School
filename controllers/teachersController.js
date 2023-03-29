const { teachersModel } = require("../models/teachers");
const { handleHttpError } = require("../utils/handleHttpError");

const getTeachers = async (req, res) => {
  try {
    const data = await teachersModel.find().populate("schoolId");
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_TEACHERS");
  }
};

const createTeacher = async (req, res) => {
  try {
    const { body } = req;
    const data = await await teachersModel.create(body);
    res.send({ data: body });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_TEACHER");
  }
};

const getTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await teachersModel.findById({ _id: id }).populate("schoolId");
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_TEACHER");
  }
};
const updateTeacher = async (req, res) => {
  try {
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_TEACHER");
  }
};

module.exports = {
  getTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
};
