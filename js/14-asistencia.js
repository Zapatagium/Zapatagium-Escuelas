class AsistenciaCalendario {
  constructor() {
    this.dias = document.querySelectorAll(".dia");
    this.iniciar();
  }

  iniciar() {
    const calendario = this;

    calendario.dias.forEach(function (dia) {
      dia.onclick = function () {
        const numero = dia.querySelector("strong");
        const estado = dia.querySelector("span");

        if (numero && estado) {
          alert("Día " + numero.textContent + ": " + estado.textContent);
        }
      };
    });
  }
}

new AsistenciaCalendario();