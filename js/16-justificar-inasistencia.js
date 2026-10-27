class JustificarInasistencia {
  constructor() {
    let form = document.getElementById("form-justificar");

    form.onsubmit = function (evento) {
      evento.preventDefault();
      window.location.href = "15-inasistencias.html";
    };
  }
}

new JustificarInasistencia();