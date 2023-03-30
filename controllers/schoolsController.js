const { schoolModel } = require("../models/school");

const getSchools = async (req, res) => {
  try {
    const data = await schoolModel.find();

    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const createSchool = async (req, res) => {
  try {
    const { body } = req;
    const data = await schoolModel.create(body);
    res.send({ data: body });
  } catch (error) {
    console.log(error);
  }
};

const getSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await schoolModel
      .findById({ _id: id })
      .populate("teachers", "name surname");

    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const updateSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await schoolModel.findByIdAndUpdate({ _id: id }, body);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await schoolModel.deleteOne({ _id: id });
    res.send(data);
    console.log("Escuela eliminada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSchools,
  createSchool,
  getSchool,
  updateSchool,
  deleteSchool,
};
