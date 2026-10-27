function entrar() {
  const dni = document.getElementById("dni").value;
  const clave = document.getElementById("clave").value;

  // Validación básica
  if (dni === "" || clave.length < 4) {
    alert("por favor complete los datos (al menos 4 caracteres)");
    return;
  }

  // Ir a la página de inicio
  location.href = "01-inicio.html";
}

// Conectamos el formulario con la función
document.getElementById("form-login").addEventListener("submit", entrar);