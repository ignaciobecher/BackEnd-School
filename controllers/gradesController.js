const { gradesModel } = require("../models/grades");
const { studentsModel } = require("../models/students");
const { handleHttpError } = require("../utils/handleHttpError");
const { usersModel } = require("../models/users");

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
    const user = await usersModel.findById(body.userId);
    user.gradesId.push(grade._id);
    await user.save();
    res.send(grade);
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_GRADES");
  }
};

const updateGrades = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await gradesModel.findByIdAndUpdate({ _id: id }, body);
    res.send(data);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_GRADES");
  }
};

const deleteGrades = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await gradesModel.deleteOne({ _id: id });
    res.send(data);
    console.log("Nota eliminada");
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_GRADES");
  }
};

module.exports = { getGrades, createGrades, updateGrades, deleteGrades };
