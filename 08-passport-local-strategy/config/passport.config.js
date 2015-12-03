var passport = require('passport'),
    User     = require('mongoose').model('User');

/*
*   Normalmente las credenciales solo se obtienen durante el login, si la
*   autenticacion tiene exito se establece la sesion y se mantiene mediante
*   una cookie en el navegador del usuario.
*   Cada petición posterior no contiene las credenciales, excepto la cookie
*   unica que identifica la sesión.
*   La id deserializada se usa para buscar el usuario, que se almacena en
*   req.user
* */

module.exports = function () {
  //passport-session
  // en este ejemplo, solo se serializa el id del usuario, manteniendo los datos de sesion pequeños
  // las peticiones subsecuentes recividas usaran este ID para encontrar al usuario
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    // en esta funcion debemos buscar el dato serializado en serializeUser en la base de
    // datos, en este caso se usa mongoose, pero puede hacerse de cualquier otra forma

    //findById acepta como segundo argumento un objeto para indicar que campos
    //se recuperan, no nos interesa recuperar el password
    User.findById(id, {password: 0}, function (err, user) {
      done(err, user);
    });
  });

  //requerimos las estrategias
  require('./strategies/local.strategy.config')();

  return passport;
};
