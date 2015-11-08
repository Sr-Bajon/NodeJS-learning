# Export

Al final lo que se ejecuta es un solo archivo en el que tiene que estar todo, 
normalmente lo llamamos server.js o index.js y en el tiene que estar contenido 
todo el código.

Como esto es inviable porque sería una autentica locura vamos separando nuestro 
código en módulos, y después los importaremos para que finalmente todo quede en 
un único archivo como ya hemos dicho.

En estos ejemplos podemos ver diferentes formas de usar **module.exports** y **exports**

También hay que tener en cuenta que a al hora de importarlo, ponerlo en el orden 
adecuado procurando que si un modulo X usa algo de otro modulo Y, habrá que 
importar primero el modulo Y para que el X no de fallos. 
