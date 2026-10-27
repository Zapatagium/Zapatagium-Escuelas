class RecuperarContra {
  constructor() {
    this.form = document.getElementById("form-recuperar");
  }

  iniciar() {
    this.form.addEventListener("submit", function() {
      alert("Te enviamos un correo con las instrucciones");
      location.href = "03-iniciar-sesion.html";
    });
  }
}