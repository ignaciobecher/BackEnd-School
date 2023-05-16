const express = require("express");
const {
  getSubjects,
  createSubject,
} = require("../controllers/subjectsController");
const router = express.Router();

router.get("/", getSubjects);
router.post("/", createSubject);

module.exports = router;
