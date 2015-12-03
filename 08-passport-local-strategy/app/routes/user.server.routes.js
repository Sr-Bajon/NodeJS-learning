var userController = require('../controllers/user.server.controller'),
    passport       = require('passport');

var util = require('util');

module.exports = function (app) {
  app.get('/registro', function (req, res) {
    res.status(200);
    res.type('text/html');
    res.render('registro');
  });

  app.post('/crear', userController.crear);

  app.route('/login')
    .get(function (req, res) {
      res.status(200);
      res.type('text/html');
      res.render('login', {
        messageError  : req.flash('error'),
        messageSuccess: req.flash('success')
      });
    })
    .post(passport.authenticate('local',
      {
        successRedirect: '/login',
        failureRedirect: '/login',
        failureFlash   : true,
        successFlash   : true
      }
    ));

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');

  });

  app.get('/navegar', userController.autorizado,
    function (req, res) {
      res.status(200);
      res.type('text/html');
      res.render('navegar', {
        mensaje: req.flash('mensaje'),
        usuario: req.user
      })
    });
};
