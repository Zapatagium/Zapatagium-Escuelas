const registroPage = {
  form: document.getElementById("form-registro"),
  clave: document.getElementById("clave"),
  clave2: document.getElementById("clave2"),

  iniciar: function () {
    registroPage.form.onsubmit = function () {
      if (registroPage.clave.value !== registroPage.clave2.value) {
        alert("Las contraseñas no coinciden");
        return false;
      }
      
      location.href = "03-iniciar-sesion.html";
      return false;
    };
  }
};

registroPage.iniciar();