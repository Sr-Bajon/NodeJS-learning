//en este archivo se realizará la configuración de express
var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    flash = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    compress = require('compression'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(){
    var app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser(config.sesionPass, {
        secure: true,
        httpOnly: true
    }));
    app.use(session({
        resave : false,
        saveUninitialized: true,
        secret : config.sesionPass
    }));
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());


    app.set('views', './public/views');
    app.set('view engine', 'ejs');

    if (config.comprimir) app.use(compress());

    //AQUI SE INCLUIRAN LAS RUTAS
    require('../app/routes/index.server.routes')(app);
    require('../app/routes/user.server.routes')(app);

    app.use(express.static('public'));
    require('../app/routes/error.server.routes')(app);
    //FIN RUTAS

    return app;
};