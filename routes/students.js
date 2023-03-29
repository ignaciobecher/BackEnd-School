const express = require("express");
const router = express.Router();
const studentsModel = require("../models/students");
const {
  getStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentsController");

router.get("/", getStudents);
router.post("/", createStudent);
router.get("/:id", getStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
