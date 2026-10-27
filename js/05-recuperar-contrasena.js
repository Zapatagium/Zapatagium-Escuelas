class RecuperarContra {
  constructor() {
    this.form = document.getElementById("form-recuperar");
  }

  enviar() {
    alert("Te enviamos un correo con las instrucciones");
    location.href = "03-iniciar-sesion.html";
    return false;
  }
}

const recuperar = new RecuperarContra();