class Notificaciones {
  constructor() {
    this.notificaciones = document.querySelectorAll(".notificacion");
    this.botones = document.querySelectorAll(".pestana");
    this.contador = document.getElementById("contador");
    this.btnMarcar = document.getElementById("boton-marcar");

    const t = this;

    document.getElementById("btn-todas").onclick = function () {
      t.filtrar("todas", this);
    };

    document.getElementById("btn-noleidas").onclick = function () {
      t.filtrar("no-leidas", this);
    };

    this.btnMarcar.onclick = function () {
      t.marcarLeidas();
    };
  }

  filtrar(filtro, botonActivo) {
    this.botones.forEach(function (b) {
      b.classList.remove("activa");
    });
    botonActivo.classList.add("activa");

    this.notificaciones.forEach(function (notif) {
      const esNoLeida = notif.classList.contains("no-leida");
      if (filtro === "no-leidas" && !esNoLeida) {
        notif.style.display = "none";
      } else {
        notif.style.display = "flex";
      }
    });
  }

  marcarLeidas() {
    this.notificaciones.forEach(function (notif) {
      notif.classList.remove("no-leida");
    });
    this.contador.textContent = "0";
  }
}

new Notificaciones();