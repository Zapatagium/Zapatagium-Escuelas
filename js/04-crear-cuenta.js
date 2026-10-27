class RegistroPage {
  constructor() {
    this.form = document.getElementById("form-registro");
    this.clave = document.getElementById("clave");
    this.clave2 = document.getElementById("clave2");
  }

  iniciar() {
    const pagina = this;

    this.form.addEventListener("submit", function() {
      if (pagina.clave.value !== pagina.clave2.value) {
        alert("Las contraseñas no coinciden");
        return;
      }

      location.href = "03-iniciar-sesion.html";
    });
  }
}

const registro = new RegistroPage();
registro.iniciar();