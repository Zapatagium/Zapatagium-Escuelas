// Pone el año actual en el footer
const anio = document.getElementById("anio");
if (anio) {
  anio.textContent = new Date().getFullYear();
}

// Busca el botón de cerrar sesión y solo actúa si existe en la página actual
const salir = document.querySelector(".js-cerrar-sesion");
if (salir) {
  salir.onclick = function () {
    alert("Sesión cerrada");
    location.href = "03-iniciar-sesion.html";
  };
}