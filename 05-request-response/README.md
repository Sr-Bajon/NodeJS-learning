# Request - Response

## Partes de una URL

https://www.google.es/search?q=jennifer+lopez+green+dress

http://localhost:3000/login?user=Juan#historial

### PROTOCOLO:

https:// | http://

Establece como se va a transmitir la petición(request). Otros protocolos pueden ser file, ftp, etc.

### HOST

**google.es | localhost**

Identifica el servidor, ya sea en Internet como google, o en local (localhost), también puede ser la IP a pelo y tener subdominios.

### PORT

**:3000**

Si no se especifica se usa el puerto 80 para http y 443 para https por defecto. Si no se usa uno de estos dos puertos, lo normal es usar uno por encima de 1023 ya que del 0 al 1023 son los puertos del sistema o well-known

### PATH

**/search | /login**

El path es normalmente la primera parte de la URL que la aplicación maneja, identifica las paginas y otros recursos de la app.

### QUERYSTRING

**?q=jennifer+lopez+green+dress | ?user=Juan**

Se trata de una colección de nombre-valor. Comienza con un signo de interrogación "?" y cada par de nombre valor está separado por un "&". El nombre y el valor deben estar en formato URL encoded, por ejemplo los espacios se sustituyen con signos "+".

Javascript tiene funciones como encodeURIComponent y decodeURIComponent para realizar esta codificación.

### FRAGMENT

**\#historial**

El fragmento, o hash, no se pasa al servidor, lo usa solo el navegador. Antes se usaba solo para mostrar determinada parte de la misma pagina, ahora se esta usando también para las aplicaciones web de una sola pagina indicar en que parte de la aplicación estamos.


## METODOS DE LA PETICIÓN HTTP

El protocolo HTTP define una serie de métodos para comunicarse con el servidor, los mas comunes son GET y POST. La información importante para el servidor es el método utilizado, el path y el querystring.
Las aplicaciones Restfull utilizan otros métodos para comunicarse con el servidor, por convenio los mas utilizados son estos:

* **GET** : Obtener uno o mas elementos
* **POST**: Crear un nuevo elemento
* **PUT**: Actualizar
* **DELETE**: Borrar

### CABECERAS DE LA PETICIÓN(REQUEST)

El navegador envía información al servidor cada vez que navegamos a una pagina, como el lenguaje utilizado por el navegador, el tipo de navegador que estas usando, etc.

### LA RESPUESTA (RESPONSE)

Igual que el navegador envía información al servidor, también en la respuesta se envían datos en la cabecera como el Content-Type que indica el tipo de contenido que se envía, si la respuesta está comprimida o el tipo de codificación que usa. También se indica que tipo de servidor sirve los contenidos e incluso el sistema operativo. Por razones de seguridad estos datos se pueden omitir o incluso falsear.

En Chrome, en las herramientas de programación(F12), en la pestaña NETWORK -> headers -> bajamos hasta ver la sección response-headers, aquí están todos los datos que envía el servidor, en nuestras aplicaciones hechas con Express vemos que pone:

_x-powered-by: Express_

Si nuestra aplicación es muy segura, podemos omitir este dato con la siguiente instrucción.

  **app.disable('x-powered-by');**

### METODOS Y PROPIEDADES

Tanto el objeto request como el response tienen propiedades y métodos que podemos ver en la API de Express. Ademas de estos, se pueden añadir otros con los módulos que vayamos instalando, por ejemplo express-session añade una propiedad session en el objeto request (para poder usar sesiones).
