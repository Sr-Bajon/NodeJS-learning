var express = require('express');

var app = express();

// deshabilitamos que diga el tipo de servidor en la respuesta
app.disable('x-powered-by');

// información que recibe el servidor del navegador
app.get('/', function (req, res) {
  // res.set establece el valor de una cabecera, en este caso Content-Type
  // seria lo mismo que res.type('text/plain');
  res.set('Content-Type', 'text/plain');
  // req.headers contiene las cabeceras de la peticion,
  // la información que envia el navegador
  var x = '';
  for (var nombre in req.headers) {
    x += nombre + ': ' + req.headers[nombre] + '\n';
  }
  res.send(x);
});

app.set('port', 3000);

app.listen(app.get('port'), function () {
  console.log('Servidor iniciado en http://localhost:' +
      app.get('port') + '; presiona Ctrl-C para terminar.');
});
