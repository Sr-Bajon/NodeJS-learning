var express = require('express'),
    bodyParser =require('body-parser'),
    formidable = require('formidable'),
    fs = require('fs'),
    path = require('path');

var app = express();
// body-parser parsea (o procesa) el cuerpo de la petición, excepto multipart, antes
// estaba incluido en Node pero lo han separado. El resultado estará en request.body

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

// se añade el middleware bodyParser, como no se indica una ruta se ejecutará
// para todas las peticiones. Antes no hacia falta pero ahora hay que especificar
// el tipo de parseo, si queremos parsear una peticion json habrá que usar
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routing
app.get('/', function(req, res){
    res.type('text/html');
    res.render('index');
});

app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('Acerca de');
});

//hemos separado las rutas de los formularios en otro archivo
require('./ServerRouting/formGet.routing.server.js')(app);
require('./ServerRouting/formPost.routing.server.js')(app);
require('./ServerRouting/formAjax.routing.server.js')(app);
require('./ServerRouting/formUpload.routing.server.js')(app, formidable, fs, path);

// Pagina 404
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - No encontrada');
});

// Pagina de error 500
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
    console.log( 'Servidor iniciado en http://localhost:' +
    app.get('port') + '; presiona Ctrl-C para terminar.' );
});
