var express = require('express'),
    ejs = require('ejs');

var app = express();

app.set('view engine', 'ejs');

//routing
app.get('/', function (req, res) {
  res.type('text/html');
  res.send('Pagina principal de nuestro sitio ' +
      '<ul>' +
      '<li><a href="/">Indice (esta pagina)</a></li>' +
      '<li><a href="/about">About</a></li>' +
      '<li><a href="/pruebaEjs">pruebaEjs</a></li>' +
      '<li><a href="/pruebaEjs2">pruebaEjs2</a></li>' +
      '<li><a href="/pruebaEjs3">pruebaEjs3</a></li>' +
      '<li><a href="/pruebaEjs4">pruebaEjs4</a></li>');
});

app.get('/about', function (req, res) {
  res.type('text/plain');
  res.send('Acerca de');
});

app.get('/pruebaEjs', function (req, res) {
  res.type('text/html');
  res.render('index', {
    tituloPagina: 'Mi primera pagina con EJS',
    tituloBody: 'Probando EJS',
    seccion: 'Aqui irá una seccion'
  }, function (err, html) {
    if (err) throw err;
    res.send(html);
  });
});

/*  otro template EJS con mas parametros
 Aqui prescindimos de res.type y del callback.
 En esta ocasion le pasamos como parametros al EJS un array y un objeto para
 ver como se usan
 */
app.get('/pruebaEjs2', function (req, res) {
  res.render('index2', {
    tituloPagina: 'Mi primera pagina con EJS',
    tituloBody: 'Probando EJS',
    unArray: ['que', 'tal', 'estamos'],
    unObjeto: {
      primero: 'pues',
      segundo: 'estamos',
      tercero: 'bastante bien'
    }
  });
});

// Ejemplo usando partials
app.get('/pruebaEjs3', function (req, res) {
  app.render('sections/seccionDinamica', {
        mensaje: 'Se ha procesado esta seccion antes de introducirla en la vista'
      },
      function (err, html) {
        if (err) throw err;
        res.render('index.ejs',
            {
              tituloPagina: 'Mi primera pagina con EJS',
              tituloBody: 'Probando EJS',
              seccion: html
            }
        );
      }
  );
});

// Ejemplo sin procesar el partial a parte, se le pasan todos los
// datos directamente
app.get('/pruebaEjs4', function (req, res) {
  res.render('index3.ejs',
      {
        tituloPagina: 'Mi primera pagina con EJS',
        tituloBody: 'Probando EJS',
        mensaje: 'Un mensaje cualquiera'
      }
  );
});

//Error 404
app.use(function (req, res) {
  res.type('text/plain');
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

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Servidor iniciado en http://localhost:' +
      app.get('port') + '; presiona Ctrl-C para terminar.');
});
