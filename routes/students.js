const express = require("express");
const router = express.Router();
const studentsModel = require("../models/students");
const {
  getStudents,
  createStudent,
  getStudent,
} = require("../controllers/studentsController");

router.get("/", getStudents);
router.post("/", createStudent);
router.get("/:id", getStudent);

module.exports = router;
