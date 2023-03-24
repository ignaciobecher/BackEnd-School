const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const dbConnect = require("./config/mongo");
const studentsRoute = require("./routes/students");

const port = process.env.PORT || 3000;

app.use(
  //FUNDAMENTAL PARA ENVIAR DATOS JSON
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json()); //FUNDAMENTAL PARA ENVIAR DATOS JSON

app.listen(port);

//Uso de rutas
app.use("/", require("./routes"));

dbConnect();
