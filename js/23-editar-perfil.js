class EditarPerfil {
  constructor() {
    this.form = document.getElementById("form-editar");
    this.nombre = document.getElementById("nombre");
    this.botonFoto = document.getElementById("boton-foto");
    const pagina = this;

    this.botonFoto.onclick = function () {
      window.alert("Más adelante vas a poder cambiar tu foto");
    };

    this.form.onsubmit = function (evento) {
      evento.preventDefault();
      pagina.guardar();
    };
  }

  guardar() {
    if (this.nombre.value.trim() === "") {
      window.alert("El nombre no puede estar vacío");
      return;
    }

    window.location.href = "22-perfil-alumno.html";
  }
}

new EditarPerfil();