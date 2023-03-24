const mongoose = require("mongoose");

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("****CONEXION ESTABLECIDA****");
  } catch (error) {
    console.log("!!CONEXION FALLIDA!!" + error);
  }
};

module.exports = dbConnect;
