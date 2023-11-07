document.addEventListener("DOMContentLoaded", function () {
  let loginForm = document.getElementById("loginForm")

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let correo = document.getElementById("correo").value
    let Clave = document.getElementById("Clave").value

    let usuario = JSON.parse(localStorage.getItem(correo))

    if (usuario.correo && usuario.Clave === Clave) {
      loginForm.reset()
      window.location.href = "notas.html"
    } else {
      Toastify({
        text: "Usuario no registrado",
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
})

let btnLastProm = document.querySelector("#addLastProm")
let ultPromedio = JSON.parse(localStorage.getItem("promedios"))


btnLastProm.addEventListener("click", function () {

  if (ultPromedio == undefined) {
    Toastify({
      text: "Inicie sesión y calcule un promedio primero antes de utilizar este botón",
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
  else {
    if (document.getElementById("h3prom") == null) {
      let DivInsProm = document.querySelector("#DivInsProm")
      let h3Prom = document.createElement("h3")
      h3Prom.id = "h3prom"
      h3Prom.textContent = ultPromedio
      DivInsProm.appendChild(h3Prom)
    }
    else {
      Toastify({
        text: "Ultimo promedio ya mostrado",
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
  }
})








