//en este archivo se realizará la configuración de express
var config  = require('./config'),
    express = require('express');

module.exports = function () {
  var app          = express(),
      cookieParser = require('cookie-parser'),
      session      = require('express-session'),
      flash        = require('connect-flash'),
      bodyParser   = require('body-parser');

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  app.use(cookieParser(config.sesionPass));

  app.use(session({
    resave           : false,
    saveUninitialized: true,
    secret           : config.sesionPass
  }));

  app.use(flash());

  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());


  //AQUI SE INCLUIRAN LAS RUTAS
  require('../app/routes/index.server.routes.js')(app);
  /*express.static debe estar antes de la ruta para la pagina 404, esto es
   porque al no encontrar un archivo, en vez de enviar error 404 lo busca en
   el directorio que hayamos indicado
   */
  app.use(express.static('public'));
  require('../app/routes/error.server.routes.js')(app);
  //FIN RUTAS

  return app;
};
