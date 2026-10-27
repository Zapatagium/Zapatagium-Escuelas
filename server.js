const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Hace que todo lo que está dentro de "html" se vea directamente en la raíz
app.use(express.static(path.join(__dirname, 'html')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('/', (req, res) => {
  res.redirect('/01-inicio.html');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});