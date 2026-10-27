class DetalleTarea {
  constructor() {
    this.boton = document.getElementById("boton-entregar");
    this.estado = document.getElementById("estado-entrega");
    const tarea = this;

    this.boton.onclick = function () {
      tarea.entregar();
    };
  }

  entregar() {
    this.estado.textContent = "Entregada";
    this.boton.textContent = "Entrega enviada";
    this.boton.disabled = true;
  }
}

new DetalleTarea();