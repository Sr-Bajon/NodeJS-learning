var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.crear = function(req, res){
    var usuario = new User(req.body);
    usuario.save(function(err){
        if(err){
            res.status(400);
            res.type('text/plain');
            res.send(err);
        }else{
            res.status(302);
            res.redirect('/login');
        }
    });
};

exports.autorizado = function(req, res, next){
    if(req.isAuthenticated()){
        req.flash('mensaje', 'Autorizado');
    }else{
        req.flash('mensaje', 'No esta autorizado');
    }
    next();
};