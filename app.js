const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const dbConnect = require("./config/mongo");
const studentsRoute = require("./routes/students");
// const path = require("path");

const port = process.env.PORT || 3000;

app.use(
  //FUNDAMENTAL PARA ENVIAR DATOS JSON
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json()); //FUNDAMENTAL PARA ENVIAR DATOS JSON

// app.use(express.static(path.join(__dirname, "../FrontEndTest")));
// app.get("/home", (req, res) => {
//   // Envía el archivo HTML para que lo renderice el frontend
//   res.sendFile(path.join(__dirname, "../FrontEndTest", "index.html"));
// });

app.listen(port);

//Uso de rutas
app.use("/", require("./routes"));

dbConnect();
