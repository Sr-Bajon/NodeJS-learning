var mongoose = require('mongoose'),
    config = require('./config.js');

module.exports = function(){

    var db;
    function conectar(){
        return db = mongoose.connect(config.db);
    }
    db = conectar();

    //AQUI HAY QUE REQUERIR LOS MODELOS
    require('../app/models/user.server.model');

    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open to ' + config.db);
    });

    // If the connection throws an error
    mongoose.connection.on('error',function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
        db = conectar();
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });

    return db;
};