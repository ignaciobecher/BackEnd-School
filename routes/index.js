const express = require("express");
const fs = require("fs");
const router = express.Router();
const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
  return filename.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    router.use(
      `https://backend-school-production.up.railway.app/${name}`,
      require(`./${file}`)
    );
  }
});

//localhost:3001/${name}

module.exports = router;
