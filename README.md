ZAPATAGIUM - pagina web escolar

Para abrirla: abrir html/01-inicio.html con doble clic.

Carpetas
html/  las 24 paginas, numeradas
img/   el logo
css/   comun.css (lo que comparten todas) y un css por cada pagina
js/    comun.js (funciones que usan todas) y un js por cada pagina que hace algo

Cada pagina NN-nombre.html carga:
  css/comun.css y css/NN-nombre.css
  js/comun.js y, si tiene, js/NN-nombre.js

Paginas
01 Inicio                      13 Nuevo mensaje
02 Sobre nosotros              14 Asistencia
03 Iniciar sesion              15 Inasistencias
04 Crear cuenta                16 Justificar inasistencia
05 Recuperar contraseña        17 Tareas
06 Terminos                    18 Detalle de tarea
07 Condiciones                 19 Materias
08 Notas                       20 Detalle de materia
09 Detalle de materia (notas)  21 Horarios
10 Boletin                     22 Perfil del alumno
11 Mensajes                    23 Editar perfil
12 Conversacion                24 Notificaciones

Celular
Al final de cada css hay un @media (max-width: 768px). Eso es lo que cambia
cuando la pantalla es chica. Para verlo: F12 y el icono del celular.

DOM (lo que se hace con los elementos de la pagina)
getElementById, querySelector, querySelectorAll
textContent y value para leer o cambiar texto
classList.add / remove / contains para las clases
createElement y appendChild para crear elementos (ej: burbujas del chat, js/12)
addEventListener para los clicks, submit, input

BOM (lo que es del navegador)
window.location.href  ir a otra pagina (funcion irA en comun.js)
window.history.back   boton volver (comun.js)
window.confirm y window.alert  cuadros de aviso (cerrar sesion, editar perfil)
window.print          imprimir el boletin (js/10)
setTimeout            esperar unos segundos (el aviso verde)
localStorage          guardar el dni en "Recordarme" (js/03)

POM (Page Object Model)
En el js de cada pagina hay un objeto (loginPage, chatPage, tareasPage...)
con los elementos de esa pagina y las funciones que hace. Ejemplo: js/03-iniciar-sesion.js
