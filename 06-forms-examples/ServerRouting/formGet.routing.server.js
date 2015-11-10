//vemos que recibe app, que es el objeto de express para poder usarlo.
module.exports = function(app){
    app.get('/formGet', function(req, res){
        res.type('text/html');
        res.render('formGet');
    });

    app.get('/procesaFormGet', function(req, res){
        //lo que hemos enviado por el metodo get está en el objeto
        //request.query (req.query)
        var s='';
        for(var clave  in req.query){
            s += clave +': ' + req.query[clave] +'\n';
        }
        //tb vemos que si no lo rellenamos no se envia nada del
        //combo multiple, check y radiobutton
        res.type('text/plain');
        res.send(s);
    });
};