var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('Hola Mundo!');
});


app.listen(3000, function () {
  console.log('Servidor iniciado en http://localhost:3000');
  console.log('Presiona Ctrl + C para terminar');
});
