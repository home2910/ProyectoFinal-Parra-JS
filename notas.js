/* NOTAS */

// Declaraciones
// vars
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let promedio = null;
// btns
let btnCalc = document.getElementById("calcular");
let addInput = document.getElementById("addInput");
let agNotas = document.getElementById("agNotas")
let rmNotas = document.getElementById("rmNotas")

// sects
let sectTitle = document.getElementById("sect-title")
let divRes = document.getElementById("resultado");
let sectNotas = document.getElementById("sectNotas");


// Btn Calcular promedio
btnCalc.addEventListener("click", function () {

  promedio = (parseInt(nota1.value) + parseInt(nota2.value)) / 2

  if (promedio >= 6.5 && promedio <= 10) {
    divRes.innerHTML = `<h2>Su promedio es de ${promedio} y promocionó la materia</h2>`;
    localStorage.setItem("promedios", JSON.stringify(promedio))
    Toastify({
      text: "Su promedio fue calculado",
      duration: 2500,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }
  else if (promedio >= 4 && promedio < 6.5) {
    divRes.innerHTML = `<h2>Su promedio es de ${promedio} y usted debe rendir examen final</h2>`;
    localStorage.setItem("promedios", JSON.stringify(promedio))
    Toastify({
      text: "Su promedio fue calculado",
      duration: 2500,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }
  else if (promedio < 4) {
    divRes.innerHTML = `<h2>Su promedio es de ${promedio} y usted debe recursar la materia</h2>`;
    localStorage.setItem("promedios", JSON.stringify(promedio))
    Toastify({
      text: "Su promedio fue calculado",
      duration: 2500,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }
  else {
    Toastify({
      text: "Recuerde que debe ingresar números entre 1 y 10",
      duration: 2500,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "rgb(255,0,0)",
        background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(166,27,27,1) 100%, rgba(166,27,27,1) 100%)"
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }
})

// Agregar input de tercer nota
addInput.addEventListener("click", function () {

  if (document.getElementById("nota3") == null) {

    let labelNewInput = document.createElement("label")
    labelNewInput.id = "labelInput"
    labelNewInput.for = "nota3"
    labelNewInput.textContent = "Ingrese su tercera nota:"

    let newInput = document.createElement("input")
    newInput.type = "number"
    newInput.id = "nota3"
    newInput.min = "0"
    newInput.max = "10"
    newInput.value = "0"

    sectNotas.appendChild(labelNewInput)
    sectNotas.appendChild(newInput)

    Toastify({
      text: "Tercer nota agregada",
      duration: 2500,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "rgb(25,236,11)",
        background: "linear-gradient(90deg, rgba(25,236,11,1) 0%, rgba(17,167,126,1) 100%)"
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }
  else {
    Toastify({
      text: "Usted ya ha agregado la tercer nota",
      duration: 2500,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "rgb(255,0,0)",
        background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(166,27,27,1) 100%, rgba(166,27,27,1) 100%)"
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }


})


// Btn calcular promedio de 3 notas
agNotas.addEventListener("click", function () {

  if (document.getElementById("nota3") !== null) {

    promedio = (parseInt(nota1.value) + parseInt(nota2.value) + parseInt(document.getElementById("nota3").value)) / 3

    if (promedio >= 6.5) {
      divRes.innerHTML = `<h2>Su promedio es de ${promedio}</h2>`
    }
    else if (promedio >= 4 || promedio < 6.5) {
      divRes.innerHTML = `<h2>Su promedio es de ${promedio}</h2>`
    }
    else {
      divRes.innerHTML = `<h2>Su promedio es de ${promedio}</h2>`
    }

    Toastify({
      text: "Su promedio fue calculado",
      duration: 2500,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "rgb(25,236,11)",
        background: "linear-gradient(90deg, rgba(25,236,11,1) 0%, rgba(17,167,126,1) 100%)"
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }
  else {
    Toastify({
      text: "Agregue la tercer nota antes de utilizar este botón",
      duration: 2500,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "rgb(255,0,0)",
        background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(166,27,27,1) 100%, rgba(166,27,27,1) 100%)"
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }
})

rmNotas.addEventListener("click", function () {

  if (document.getElementById("nota3") !== null) {
    let queryNota3 = document.querySelector("#nota3")
    let queryLabel = document.querySelector("#labelInput")
    sectNotas.removeChild(queryNota3)
    sectNotas.removeChild(queryLabel)
  }
  else {
    Toastify({
      text: "Agregue la tercer nota antes de utilizar este botón",
      duration: 2500,
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "rgb(255,0,0)",
        background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(166,27,27,1) 100%, rgba(166,27,27,1) 100%)"
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }
})

// Api clima
document.getElementById("clima").addEventListener("click", function (event) {
  event.preventDefault()

  // Obtener la ubicación
  navigator.geolocation.getCurrentPosition(function (posicion) {
    let lat = posicion.coords.latitude
    let long = posicion.coords.longitude
    let key = "83c1c3d1a4c97f751d10c2d75458ca2c"

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const weatherInfo = document.getElementById("weather-info")
        weatherInfo.innerHTML = `<p>${data.name}</p>
                                  <p>Temp: ${data.main.temp}</p>
                                  <p>Clima: ${data.weather[0].description}</p>`
      })
  })
})

navigator.geolocation.getCurrentPosition(posicion)
