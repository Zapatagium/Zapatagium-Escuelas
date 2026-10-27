class Buscador{
  constructor() {
    const buscador = document.getElementById("buscador");
    const mensajes = document.querySelectorAll(".mensaje");

    buscador.oninput = function () {
      const texto = buscador.value.toLowerCase();

      for (let i = 0; i < mensajes.length; i++) {
        const mensaje = mensajes[i];
        const contenido = mensaje.textContent.toLowerCase();

        if (contenido.includes(texto)) {
          mensaje.style.display = "flex";
        } else {
          mensaje.style.display = "none";
        }
      }
    };
  }
}

new Buscador();