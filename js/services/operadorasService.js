angular.module("listaTelefonica").service("operadorasService", function($http, configValue) {
    this.getOperadoras = function() {
        return $http.get(configValue.baseUrl + '/operadoras');
    }
});