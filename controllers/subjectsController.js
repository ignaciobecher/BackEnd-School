const { subjectModel } = require("../models/subjects");
const { schoolModel } = require("../models/school");

//Funcion para mostrar materias
const getSubjects = async (req, res) => {
  try {
    const data = await subjectModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

//Funcion para crear una materia y añadirla a una escuela
const createSubject = async (req, res) => {
  try {
    const { body } = req;
    //Creo nuevo subject
    const subject = await subjectModel.create(body);
    //Encuentro un school segun Id
    const school = await schoolModel.findById(body.school);
    //Agrego el Id del nuevo subject creado al array subjects de school
    school.subjects.push(subject._id);
    //guardo
    await school.save();
    res.send(subject);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSubjects, createSubject };
