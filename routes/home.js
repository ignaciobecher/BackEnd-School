const express = require("express");
const router = express.Router();
const path = require("path");

router.use(express.static(path.join(__dirname, "../FrontEndTest")));

router.get("/", (req, res) => {
  // Envía el archivo HTML para que lo renderice el frontend
  res.sendFile(path.join(__dirname, "../FrontEndTest", "index.html"));
});

module.exports = router;
