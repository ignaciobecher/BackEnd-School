const express = require("express");
const router = express.Router();
const {
  getTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teachersController");

router.get("/", getTeachers);
router.post("/", createTeacher);
router.get("/:id", getTeacher);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);

module.exports = router;
