module.exports = function(app){
    app.get('/formAjax', function(req, res){
        res.type('text/html');
        res.render('formAjax');
    });

    app.post('/procesaFormAjax', function(req, res){
        if(req.xhr || req.accepts('json, html')==='json'){
            res.send({success : true, body: req.body});
        }else{
            res.send({success : false});
        }
    });
};