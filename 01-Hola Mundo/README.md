# Hello World con NodeJS y express

Con __app.listen__ iniciamos el servidor en el puerto 3000.

Como __app.get__ obtenemos un valor que previamente hayamos seteado con __app.set__

Tambien con __app.get__ podemos establecer rutas y definir lo que pasa cuando se navega a esa 
ruta, el primer parametro de __app.get__ es la ruta __'/'__, y el segundo un callback que toma a su vez 
como parametros el objeto request y el objeto response.

El objeto __request__ (peticion) contiene los valores de la peticion al servidor (por ejemplo los 
valores de un formulario), y el objeto __response__ contiene la respuesta que envia el servidor.
