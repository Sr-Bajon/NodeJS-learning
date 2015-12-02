var entorno = process.env.NODE_ENV || 'development';
module.exports = require('./env/' + entorno + '.js');