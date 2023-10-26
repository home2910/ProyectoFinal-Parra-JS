document.addEventListener("DOMContentLoaded", function () {
  let registroForm = document.getElementById("registroForm")

  registroForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value
    let Clave = document.getElementById("Clave").value

    let usuario = {
      nombre: nombre,
      correo: correo,
      Clave: Clave,
    }

    localStorage.setItem(correo, JSON.stringify(usuario))

    Toastify({
      text: "Usuario registrado correctamente",
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
    registroForm.reset()
  })
})
