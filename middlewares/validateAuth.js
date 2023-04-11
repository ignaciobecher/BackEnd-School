const express = require("express");
const { usersModel } = require("../models/users");
const {
  loginController,
  registerUser,
} = require("../controllers/usersController");

const authRoute = (req, res, next) => {
  if (req.userName && req.email) {
    console.log("Validacion de ruta ok");
    next();
  } else {
    console.log(req.userName);

    res.redirect("/home");
    console.log("No se pudo validar");
  }
};

module.exports = { authRoute };
