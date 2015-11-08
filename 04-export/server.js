var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var suma1 = require('./modules/module1.js');
  console.log('La suma 1 da: ' + suma1(2, 2));
  console.log('La suma 1 da: ' + require('./modules/module1.js')(3, 3));

  var suma2 = require('./modules/module2.js');
  console.log('La suma 2 da: ' + suma2.suma2(4, 4));
  console.log('La suma 2 da: ' + require('./modules/module2.js').suma2(5, 5));

  var suma3 = require('./modules/module3.js');
  console.log('La suma 3 da: ' + suma3.suma3(6, 6));
  console.log('La suma 3 da: ' + require('./modules/module3.js').suma3(7, 7));

  var suma4 = require('./modules/module4.js');
  console.log('La suma 4 da: ' + suma4(8, 8));
  console.log('La suma 4 da: ' + require('./modules/module4.js')(9, 9));

  var ejemploExport = require('./modules/module6.js');
  console.log(ejemploExport.c);

  var ejemploPreferencia = require('./modules/module7.js');
  console.log(ejemploPreferencia);

  var fin = require('./modules/module5.js');
  console.log(fin.a, fin.a, fin.a, fin.b,
      require('./modules/module5.js').c);

  res.send('hola');
});


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Servidor iniciado en http://localhost:' +
      app.get('port') + '; presiona Ctrl-C para terminar.');
});
