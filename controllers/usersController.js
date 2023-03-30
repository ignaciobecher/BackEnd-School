const { usersModel } = require("../models/users");
const { encrypt, comparePasswords } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJWT");

const registerUser = async (req, res) => {
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
};

// //Login
// const loginController = async (req, res) => {
//   const user = usersModel
//     .findOne({ email: req.body.email })
//     .select("password name role email");
//     if(!user){
//         console.log("Usuario no encontrado");
//     }

// };

module.exports = { registerUser };
