const { teachersModel } = require("../models/teachers");
const { handleHttpError } = require("../utils/handleHttpError");
const { schoolModel } = require("../models/school");

const getTeachers = async (req, res) => {
  try {
    const data = await teachersModel.find();
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_TEACHERS");
  }
};

const createTeacher = async (req, res) => {
  try {
    const { body } = req;
    const teacher = await teachersModel.create(body);
    const school = await schoolModel.findById(body.schoolId);
    school.teachers.push(teacher._id);
    await school.save();
    res.send(teacher);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_TEACHER");
  }
};

const getTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await teachersModel
      .findById({ _id: id })
      .populate(
        "schoolId",
        "-_id -middleSchool -highSchool -public -private -teachers -__v"
      );

    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_TEACHER");
  }
};

const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await teachersModel.findByIdAndUpdate({ _id: id }, body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_TEACHER");
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await teachersModel.deleteOne({ _id: id });
    res.send(data);
    console.log("Profesor eliminado");
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_TEACHER");
    console.log(error);
  }
};

module.exports = {
  getTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
};
