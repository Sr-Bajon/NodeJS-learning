exports.root = function(req, res){
    res.type('text/html');
    res.render('index');
};

exports.about = function(req, res){
    res.type('text/plain');
    res.send('Acerca de');
};