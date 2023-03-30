const express = require("express");
const {
  getGrades,
  createGrades,
  updateGrades,
  deleteGrades,
} = require("../controllers/gradesController");
const router = express.Router();

router.get("/", getGrades);
router.post("/", createGrades);
router.put("/:id", updateGrades);
router.delete("/:id", deleteGrades);

module.exports = router;
