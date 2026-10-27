// marca en la tabla el dia de hoy
const hoy = new Date().getDay();   // 0 es domingo, 1 lunes ... 6 sabado

// los titulos de la tabla tienen id dia1, dia2, etc
const titulo = document.getElementById("dia" + hoy);

// sabado y domingo no hay columna, por eso el if
if (titulo) {
  titulo.classList.add("hoy");
}
