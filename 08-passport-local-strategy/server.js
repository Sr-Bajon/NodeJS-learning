var mongooseConf = require('./config/mongoose.config'),
    express = require('./config/express.config'),
    config = require('./config/config');

var db = mongooseConf();
var passport = require('./config/passport.config')();
var app = express(db);


app.listen(config.puerto, function(){
    console.log( 'Servidor iniciado en http://localhost:' +
        config.puerto + '; presiona Ctrl-C para terminar.' );
});

module.exports = app;