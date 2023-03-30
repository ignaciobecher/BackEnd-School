const bcryptjs = require("bcryptjs");

//Funcion encriptadora de contraseña
const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10); //pasa la contraseña plana a hash
  return hash;
};

//Funcion que compara la contra plana con la hasheada

const comparePasswords = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, comparePasswords };
