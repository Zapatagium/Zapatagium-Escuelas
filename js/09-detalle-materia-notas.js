// pinta de rojo las notas menores a 4
const notas = document.querySelectorAll(".nota");

notas.forEach(function (nota) {
  if (Number(nota.textContent) < 4) {
    nota.classList.add("baja");
  }
});
