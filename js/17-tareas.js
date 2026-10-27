class Tareas {
  constructor() {
    this.tareas = document.querySelectorAll(".tarea");
    this.botones = document.querySelectorAll(".pestana");

    this.conectar("btn-pendientes", "pendiente");
    this.conectar("btn-entregadas", "entregada");
    this.conectar("btn-vencidas", "vencida");

    this.mostrar("pendiente", document.getElementById("btn-pendientes"));
  }

  conectar(id, estado) {
    const t = this;
    const boton = document.getElementById(id);

    boton.onclick = function () {
      t.mostrar(estado, boton);
    };
  }

  mostrar(estado, botonActivo) {
    this.botones.forEach(function (b) {
      b.classList.remove("activa");
    });
    botonActivo.classList.add("activa");

    this.tareas.forEach(function (tarea) {
      if (tarea.classList.contains(estado)) {
        tarea.style.display = "flex";
      } else {
        tarea.style.display = "none";
      }
    });
  }
}

new Tareas();