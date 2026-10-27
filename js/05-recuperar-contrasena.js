class RecuperarPage {
  constructor() {
    this.form = document.getElementById("form-recuperar");
  }

  iniciar() {
    this.form.onsubmit = function () {
      alert("Te enviamos un correo con las instrucciones");
      location.href = "03-iniciar-sesion.html";
      return false;
    };
  }
}
const recuperar = new RecuperarPage();
recuperar.iniciar();