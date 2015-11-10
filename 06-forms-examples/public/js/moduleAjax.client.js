(function(){
    //definimos el modulo, se corresponde con la propiedad ng-app en
    //la pagina web formAjax.ejs
    var app = angular.module('moduloAjax', []);
    //controlador para el formulario ajax, se corresponde con la propiedad
    //ng-controller en el <form> de la pagina
    app.controller('FormController', ['$http', function($http) {
        //observamos que fc corresponde al alias del controlador en la pagina EJS, le asignamos
        //el this para que dentro de la función sepa a que contexto se refiere al asignarle
        //un valor
        var fc = this;
        //aqui se iran guardando los valores del formulario
        fc.formData = {
            nombre      : '',
            email       : '',
            password    : '',
            combo       : 'opcionS1',
            comboM      : '',
            check       : '',
            radio       : ''
        };

        this.procesaForm = function(){
            $http({
                method: 'POST',
                url: 'procesaFormAjax',
                data : fc.formData,
                headers : {'X-Requested-With': 'XMLHttpRequest'}
            }).success(function(data, status, headers, config){
                fc.respuesta = {
                    datos : data,
                    estado : status,
                    cabecera : headers,
                    configuracion : config
                };
            }).error(function(data, status, headers, config){
                fc.respuesta = {
                    datos : data,
                    estado : status,
                    cabecera : headers,
                    configuracion : config
                };
            });
        }
    }]);

})();









































