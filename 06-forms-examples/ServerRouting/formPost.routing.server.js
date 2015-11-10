module.exports = function(app){
    app.get('/formPost', function(req, res){
        res.type('text/html');
        res.render('formPost');
    });

    //vemos que usamos app.post pq se trata de una peticion post
    app.post('/procesaFormPost', function(req, res){
        // lo que hemos enviado por el metodo post está en el objeto
        // request.body gracias a body-parser
        var s='';
        for(var clave  in req.body){
            s += clave +': ' + req.body[clave] +'\n';
        }

        res.type('text/plain');
        res.send(s);
    });
};
