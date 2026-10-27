const recuperarPage = {
  form: document.getElementById("form-recuperar"),

  iniciar: function () {
    recuperarPage.form.onsubmit = function () {
      alert("Te enviamos un correo con las instrucciones");
      location.href = "03-iniciar-sesion.html";
      return false;
    };
  }
};

recuperarPage.iniciar();