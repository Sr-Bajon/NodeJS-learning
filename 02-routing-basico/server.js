var express = require('express');

var app = express();

app.get('/', function (req, res) {
  //res.type establece el tipo de la respuesta, puede ser
  // 'html', 'json', etc
  res.type('text/plain');
  //res.send envia la respuesta que le indiquemos
  res.send('Pagina principal de nuestro sitio');
});

//captura las peticiones GET que coincidan con /about
app.get('/about', function (req, res) {
  res.type('text/plain');
  res.send('Acerca de');
});

// pagina de error 404
app.use(function (req, res) {
  res.type('text/plain');
  //res.status establece el codigo de la respuesta, 200 ok, 500 error,
  // 404 not found, etc
  res.status(404);
  res.send('404 - No encontrada');
});

// Pagina de error 500
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});


app.listen(3000, function () {
  console.log('Servidor iniciado en http://localhost:3000 ' +
      'presiona Ctrl-C para terminar.');
});
