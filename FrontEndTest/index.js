const btnShow = document.getElementById("btn-show");
const btnAdd = document.getElementById("btn-add");

//METODO GET DEL FETCH
const getStudentsAsync = async () => {
  const res = await fetch("http://localhost:3001/students");
  const data = await res.json();
  return data;
};

//METODO POST DEL FETCH
const createStudent = () => {
  fetch("http://localhost:3001/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Post",
      surname: "Api",
      age: 1,
      course: "Post con front end integrado en carpeta backend",
      email: "postfromback@gmail.com",
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Estudiante agregado exitosamente.");
      } else {
        console.error("Error al agregar el estudiante.");
      }
    })
    .catch((error) => {
      console.error("Error al agregar el estudiante:", error);
    });
};

//!!!!!!!!!!!!!FUNCIONES!!!!!!!!!!!!!//
//FUNCION SHOW STUDENTS
const showStudents = async () => {
  const datos = await getStudentsAsync(); //me devuelve los datos del get
  const objectsOfJson = datos.data; //accedo al array data donde se encuentran los objetos
  //console.log(objectsOfJson[1].name);
  for (let i = 0; i < objectsOfJson.length; i++) {
    const objects = objectsOfJson[i];
    const bodyHtml = document.body;
    const separator = document.createElement("h4");
    separator.textContent = "********************************";
    bodyHtml.appendChild(separator);
    for (let propiedad in objects) {
      if (
        propiedad !== "_id" &&
        propiedad !== "createdAt" &&
        propiedad !== "updatedAt"
      ) {
        const bodyHtml = document.body;
        const propiedadHTML = document.createElement("p");
        propiedadHTML.textContent = `${propiedad}: ${objects[propiedad]}`;
        bodyHtml.appendChild(propiedadHTML);
      }
    }
  }
};

//EJECUCION DE LAS FUNCIONES
btnShow.addEventListener("click", showStudents);
btnAdd.addEventListener("click", createStudent);
