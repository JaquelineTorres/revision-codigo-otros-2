const formulario = document.forms["form"];
/* Se refactorizo el código */
formulario.addEventListener("submit", async (event) => {
  event.preventDefault();
  /* console.log("Estoy en el evento click del botón submit"); */

  const nameInput = formulario.elements["name"];
  const ageInput = formulario.elements["age"];
  const nationalityInput = formulario.elements["nationality"];

  const name = nameInput.value;
  const age = ageInput.value;
  const nationality = nationalityInput.value;

  /* console.log(`Nombre: ${name}, Edad: ${age}, Nacionalidad: ${nationality}`); */

  if (name.length === 0) {
    nameInput.classList.add("error");
  } else {
    nameInput.classList.remove("error");
  }

  if (age < 18 || age > 120) {
    ageInput.classList.add("error");
  } else {
    ageInput.classList.remove("error");
  }
  if (name.length > 0 && (age >= 18 && age <= 120)) {
    agregarInvitado(name, age, nationality);
  }

});

//e.prevent();
//console.log(e);

/* var n = formulario.elements[0]
var e = formulario.elements[1]
var na = formulario.elements[2]

var nombre = n.value
var edad = e.value

var i = na.selectedIndex
var nacionalidad = na.options[i].value
console.log(nombre, edad)
console.log(nacionalidad)

if (nombre.length === 0) {
  n.classList.add("error")
}
if (edad < 18 || edad > 120) {
  e.classList.add("error")
}

if (nombre.length > 0
  && (edad > 18
    && edad < 120)) {
  agregarInvitado(nombre, edad, nacionalidad)
}
} */

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div");
  /* Se corrigió al added por add */
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista);

  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}