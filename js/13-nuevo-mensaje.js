class NuevoMensaje {
  constructor() {
    this.form = document.getElementById("form-mensaje");
    const pagina = this;

    this.form.onsubmit = function (e) {
      e.preventDefault();
      pagina.enviar();
    };
  }

  enviar() {
    // Al hacer clic en enviar, te lleva directo a la pantalla de mensajes
    window.location.href = "11-mensajes.html";
  }
}

new NuevoMensaje();