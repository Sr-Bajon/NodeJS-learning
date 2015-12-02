var passport      = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User          = require('mongoose').model('User');


module.exports = function () {
  passport.use(new LocalStrategy(function (username, password, done) {
    /*
     *   done es un callback de verificacion y dependiendo de lo que le pasemos
     *   significará una cosa u otra
     *   done(null, user) = El usuario ha sido autenticado
     *   done(null, false) = La autenticación ha fallado
     *   done(null, false, {message: 'un mensaje'}) = Le podemos poner un mensaje
     *   done(err) = Ha ocurrido una excepción.
     */

    User.findOne({username: username}, function (err, user) {
      //findOne busca la primera ocurrencia y la devuelve, null si no la encuentra
      if (err) return done(err);

      if (!user) {
        return done(null, false, {
          message: 'Usuario no encontrado'
        });
      }

      //validPassword debemos implementarla nosotros
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Contraseña incorrecta'
        });
      }

      return done(null, user, {
        message: 'Identificado correctamente!'
      });
    });
  }));
};
