module.exports = function (app, formidable, fs, path) {
  app.get('/formUpload', function (req, res) {
    res.type('text/html');
    res.render('formUpload');
  });

  var DIRECTORIO_TEMPORAL = path.join(__dirname, '../tmp');
  var DIRECTORIO_SUBIDAS = path.join(__dirname, '../upload');

  app.post('/procesaFormUpload', function (req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = DIRECTORIO_TEMPORAL;

    form.parse(req, function (err, fields, files) {
      if (err) return res.redirect(303, '/error');

      var d = new Date();
      var fileInfo = {
        tamaño: files.upload.size,
        rutaTemp: files.upload.path,
        nombreOld: files.upload.name,
        extension: files.upload.name.split('.').pop(),
        fechaSubida: files.upload.lastModifiedDate
      };

      fileInfo.nombreNuevo = d.getTime() + '.' + fileInfo.extension;
      fileInfo.rutaNueva = path.join(DIRECTORIO_SUBIDAS, fileInfo.nombreNuevo);

      //primero leemos el fichero
      fs.readFile(fileInfo.rutaTemp, function (err, data) {
        if (err) throw err;
        //a continuacion lo copiamos en la ruta nueva
        fs.writeFile(fileInfo.rutaNueva, data, function (err) {
          //por ultimo lo borramos del directorio temporal
          fs.unlink(fileInfo.rutaTemp, function (err) {
            if (err) throw err;

            res.type('text/plain');
            var s = 'Todo correcto \n\n\n fileInfo: \n';
            for (var clave  in fileInfo) {
              s += clave + ': ' + fileInfo[clave] + '\n';
            }
            s += '\n\n\nfiles.upload:\n';
            for (clave  in files.upload) {
              s += clave + ': ' + files.upload[clave] + '\n';
            }
            res.send(s);
          });
        });
      });
    });
  });
};
