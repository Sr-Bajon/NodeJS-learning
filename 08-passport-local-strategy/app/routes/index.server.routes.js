module.exports = function(app){
    var index = require('../controllers/index.server.controller.js');

    app.get('/', index.root);

    app.get('/about', index.about);
};