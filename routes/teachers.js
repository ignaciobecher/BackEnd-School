const express = require("express");
const router = express.Router();
const {
  getTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
} = require("../controllers/teachersController");

router.get("/", getTeachers);
router.post("/", createTeacher);
router.get("/:id", getTeacher);
router.put("/:id", updateTeacher);

module.exports = router;
