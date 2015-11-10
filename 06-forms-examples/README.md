# Manejo de formularios

## Servidor
Como cosas nuevas en el servidor el uso de [body-parser](https://www.npmjs.com/package/body-parser), se trata de un modulo para procesar las
peticiones post.
Tambien puede procesar peticiones JSON.
Las peticiones multipart para subir archivos necesita otros modulos, por ejemplo [Formidable](https://www.npmjs.com/package/formidable)

## Formularios GET

La peticion con los datos del formulario estaran en el objeto request en la clave query (req.query)

El combo de seleccion multiple, el check y el radio button no aparecen si no se rellena nada de ellos.

Todos los elementos del formulario (y el formulario) deben tener un atributo name pues será este el 
que se use para identificar el elemento.

## Formularios POST

A tener en cuenta que debemos instalar un modulo para poder procesar peticiones POST, en este ejemplo
[body-parser](https://www.npmjs.com/package/body-parser).

Los datos del formulario estaran en request.body (req.body)

## Formularios AJAX

La peticion AJAX la hacemos con AngularJS.
Tambien es muy facil, primero nos asegurameos que efectivamente es una peticion AJAX con
**if(req.xhr || req.accepts('json, html')==='json'){**
luego procesamos la peticion y enviamos la respuesta.
AngularJS se encarga de recibir la petición y realizar la logica que necesite, en este ejemplo muestra
el objeto de respuesta por pantalla.

## Subida de archivos.
Para procesar las peticiones **multipart** necesitamos otro modulo a parte de body-parser, en el 
ejemplo usamos [Formidable](https://www.npmjs.com/package/formidable)

El proceso de subir un archivo implica:
- Leer el fichero desde una ruta temporal
- Copiar el fichero con otro nombre (por seguridad) en una nueva ruta
- Borrar el fichero de la ruta temporal
- Devolver una respuesta, ya sea si ha ido bien o ha ido mal.

Para ver el proceso en detalle ver el codigo de **ServerRouting/formUpload.routing.server.js**
