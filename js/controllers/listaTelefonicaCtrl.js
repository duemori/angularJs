angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatos, serialGenerator) {
    $scope.contatos = contatos.data.map(function(item) {
        item.serial = serialGenerator.generate();
        return item;
    });

    /* contatosService.getContatos().then(function sucesso(response) {
        $scope.contatos = response;
    }, function erro(e) {
        $scope.message = "Ocorreu um erro " + e.data;
    }); */

    $scope.apagarContatos = function(contatos) {
        $scope.contatos = contatos.filter(function(contato) { return !contato.selecionado; });
    }

    $scope.isContatoSelecionado = function(contatos) {
        return contatos.some(function(contato) { return contato.selecionado; });
    }

    $scope.ordenaPor = function(campo) {
        $scope.campoOrdenacao = campo;
        $scope.sentidoOrdenacao = !$scope.sentidoOrdenacao;
    }
})