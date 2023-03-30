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
router.put("/", updateGrades);
router.delete("/", deleteGrades);

module.exports = router;
