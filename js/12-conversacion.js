class Chat {
  constructor() {
    this.form = document.getElementById("form-chat");
    this.input = document.getElementById("texto-mensaje");
    this.lista = document.getElementById("lista-chat");

    const miChat = this;

    this.form.onsubmit = function (e) {
      e.preventDefault();
      miChat.enviar();
    };
  }

  enviar() {
    let texto = this.input.value;
    if (texto === "") return;

    // Crear la burbuja
    let burbuja = document.createElement("div");
    burbuja.className = "burbuja enviada";
    burbuja.textContent = texto;

    // Crear la hora
    let hora = document.createElement("span");
    hora.className = "hora";
    let d = new Date();
    let minutos = d.getMinutes();
    if (minutos < 10) minutos = "0" + minutos;
    hora.textContent = d.getHours() + ":" + minutos;

    // Unir todo con appendChild
    burbuja.appendChild(hora);
    this.lista.appendChild(burbuja);

    // Limpiar input
    this.input.value = "";
  }
}

new Chat();