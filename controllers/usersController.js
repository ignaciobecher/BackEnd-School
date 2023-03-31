const { usersModel } = require("../models/users");
const { encrypt, comparePasswords } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJWT");
const { compare } = require("bcryptjs");
const { handleHttpError } = require("../utils/handleHttpError");

const registerUser = async (req, res) => {
  try {
    const { userName, password, email } = req.body; //ingreso los datos en el body
    const passwordHash = await encrypt(password); //hasheo la contra
    const body = { userName, password: passwordHash, email }; //establezco que la contra es = a contra hasheada
    const userRegistered = await usersModel.create(body); //creo el usuario
    userRegistered.set("password", undefined, { strict: false }); //oculto contra
    const data = {
      //digo que data=
      token: await tokenSign(userRegistered), //token es igual al usuario registrado pero hecho token
      user: userRegistered, //usuario es igual a usuairo
    };
    res.json({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

//Controlador para logear
const loginController = async (req, res) => {
  try {
    const user = await usersModel //encuentro si existe el usuario de ese mail
      .findOne({ email: req.body.email })
      .select("password"); //traigo los datos
    if (!user) {
      console.log("Usuario no encontrado");
    }
    const plainPassword = req.body.password; //obtengo contra plana
    const hashPassword = user.get("password"); //obtengo la hasheada que se creo al registrarse
    const check = await compare(plainPassword, hashPassword); //las comparo
    if (!check) {
      return null; //si no son iguales return nul
    }

    user.set("password", undefined, { strict: false });
    const data = {
      //genero el token con el usuario
      token: await tokenSign(user),
      user,
    };
    console.log("Usuario logeado");
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

const getUsers = async (req, res) => {
  const data = await usersModel.find();
  res.send(data);
};

module.exports = { registerUser, loginController, getUsers };
