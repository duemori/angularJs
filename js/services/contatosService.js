angular.module("listaTelefonica").factory("contatosService", function($http, configValue) {
    var _getContatos = function() {
        return $http.get(configValue.baseUrl + '/contatos');
    }

    var _getContato = function(id) {
        return $http.get(configValue.baseUrl + '/contatos/'+ id);
    }

    var _saveContatos = function(contato) {
        return $http.post(configValue.baseUrl + '/contatos', contato);
    }

    return {
        getContatos: _getContatos,
        getContato: _getContato,
        saveContatos: _saveContatos
    }
});