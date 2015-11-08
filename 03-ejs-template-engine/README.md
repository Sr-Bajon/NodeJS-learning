# Template Engine, EJS

EJS, al igual que otros template engine, nos permite renderizar paginas HTML 
antes de servirlas.

Para renderizar una pagina primero establecemos el template engine que vamos a 
usar, en este ejemplo usamos EJS.
 
  **app.set('view engine', 'ejs');**
  
En las rutas indicamos con **res.type()** el tipo de documento que se va a 
enviar en la respuesta, si no lo ponemos el navegador lo averigua por si mismo, 
si se pone se ahorra tiempo en tener que buscarlo.   

**res.render()** procesa la vista que le indiquemos, le pasa los parametros que 
haya en el objeto como segundo argumento. 
Como _tercer argumento opcional_ tiene una función callback, 
Si usa el callback hay que poner explicitamente que envíe la vista procesada con 
**res.send()**

## Partials
partial es un trozo de codigo html que se incluye en la pagina, por ejemplo 
tenemos la cabecera y el pie en archivos separados y los incluimos en el archivo 
que vayamos a mostrar en nuestra pagina index.ejs. Pero no estaticamente, que 
se hace con include de ejs (ver index.ejs)

Si queremos procesar tambien la seccion que queremos incluir, usamos 
**app.render** que procesa la pagina que le indiquemos, igual que se hace con 
**res.render()** y obtenemos el resultado en el callback que le pasamos.

**res.render()** lo que hace es llamar internamente a **app.render()**, usamos 
**app.render** si queremos obtener la pagina procesada por cualquier motivo, en 
nuestro ejemplo el motivo es que queremos introducirla ya procesada en la otra 
pagina.

Con el resultado de **app.render()** que es la variable html, llamamos a 
**res.render** como ya sabemos, y es en el objeto de parametros cuando le 
ponemos la seccion procesada (html).

En realidad no hace falta procesar el partial a parte, se puede incluir con 
include de ejs y tratarlo como si fuera una sola pagina con las variables
ejs que haya en total.
De todas formas, procesar el partial a parte sigue siendo util porque asi podemos 
elegir en tiempo de ejecución que partial queremos incluir en la pagina.
