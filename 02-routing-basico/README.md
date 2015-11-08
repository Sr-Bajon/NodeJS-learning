# Routing Basico

Podemos imaginar los middleware como una tuberia, se trata de funciones por las
que va pasando secuencialmente hasta que entra en una, ahi se parará o pasará a la 
siguiente si encuentra la función **next()**

En el caso de las rutas va recorriendolas hasta que entra en una que coincide con
la ruta especificada, entra en esa y se para, por eso es importante el orden en que 
definamos las rutas ya que podria darse el caso de rutas en las que no entraria nunca 
por estar despues de otras.

En el ejemplo hay 4 middleware para las rutas, **app.get** captura las rutas GET,
**app.post** las POST y así. 

El primer middleware captura las rutas GET que coincidan con '/'
http://localhost/3000   o   http://localhost/3000/  es lo mismo.  
Vemos que la función recibe los objetos request y response, la peticion y la respuesta
respectivamente

##Pagina de error 404

Cuando no encuentra otra pagina llega aqui si ha recorrido los anteriores middleware y la 
ruta no coincide con niguna de las especificadas.

app.use es la forma de crear middleware, no se indica ruta pq tiene que capturar todas las 
rutas que **no** coincidan con las especificadas.

##Pagina de error 500
Se define como  
    **app.use(function(err, req, res, next){** 
si hay un error en el servidor irá a esta ruta automaticamente, sabe que este es el middelware 
de error porque tiene 4 parametros.
