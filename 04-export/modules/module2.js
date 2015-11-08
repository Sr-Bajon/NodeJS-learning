var suma2 = function (valor1, valor2){
    return valor1 + valor2;
};

//exports es un objeto, aqui estamos añadiendo una propiedad suma2 al objeto
//exports cuyo valor es la función suma2
module.exports.suma2 = suma2;