
#Cookies

##Cookie parser
<code>app.use(cookieParser('mySecret'));</code>


<p>cookie-parser acepta dos valores</p> 
* el primero es una contraseña para usar con las cookies firmadas
* el segundo, un objeto de configuracion

cookie-parser crea una nueva propiedad en el objeto response

**response.cookie**

###Crear una cookie
podemos **crear una cookie** así:
<code>
    res.cookie(name, value, options)
    res.cookie('name', 'tobi');  //cookie normal
    res.cookie('name', 'tobi', { signed: true });  //signed cookie
</code>

si hay cookies en el cliente, se almacenarán en **res.cookies**  o **res.signedCookies** 
dependiendo de si son firmadas (signed) o no.

###Borrar una cookie
para borrar una cookie
**res.clearCookie('nombreCookie');**
     
     
##Express session

<pre>
<code>     
app.use(session({
  resave : false,
  saveUninitialized: true,
  secret : config.sesionPass
}));     
</code>
</pre>     
     
express-session puede recibir también un objeto de configuración

Crea un nuevo objeto, en req.session, que podemos usar para guardar los datos que 
queramos:
<code>
req.session.userName = Pepe;
req.session.userName = null; //esto no borra userName
delete req.session.userName; //esto si lo borra
</code>    
         

##Connect-flash         
connect-flash es para mostrar mensajes flash en las vistas, son mensajes que se 
borran automaticamente despues de mostrarlos
<code>
req.flash('info', 'Hi there!');
req.flash('info', ['Welcome', 'Please Enjoy']);

app.use(flash());         
</code>     
