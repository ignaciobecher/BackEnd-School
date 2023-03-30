const jsonWebToken = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

//Funcion para firmar con token
const tokenSign = async (user) => {
  //creo la funcion
  const sign = jsonWebToken.sign(
    //utilizo el sign de jwt
    {
      _id: user._id, //compruebo que id y role sean correctos
      role: user.role,
    },
    JWT_SECRET, //paso la llave para firmar
    {
      expiresIn: "2h", //tiempo dee vencimiento
    }
  );

  return sign; //devuelve el token
};

//Verificar que el token esta firmado por usuario
const verifyToken = async (tokenJwt) => {
  //paso el token
  try {
    return jsonWebToken.verify(tokenJwt, JWT_SECRET);
  } catch (error) {}
};

module.exports = { tokenSign, verifyToken };
