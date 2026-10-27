function entrar() {
  const dni = document.getElementById("dni").value;
  const clave = document.getElementById("clave").value;
  if (dni === "" || clave.length < 4) {
    alert("por favor complete los datos (al menos 4 caracteres)");
    return;
  }

  //pag de inicio
  location.href = "01-inicio.html";
}
document.getElementById("form-login").addEventListener("submit", entrar);