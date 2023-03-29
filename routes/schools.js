const express = require("express");
const router = express.Router();
const {
  getSchools,
  createSchool,
  getSchool,
  updateSchool,
  deleteSchool,
} = require("../controllers/schoolsController");

router.get("/", getSchools);
router.post("/", createSchool);
router.get("/:id", getSchool);
router.put("/:id", updateSchool);
router.delete("/:id", deleteSchool);

module.exports = router;
