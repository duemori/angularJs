// $routeParams -> Para utilizar diretamente no controller para pegar os parâmetros da rota.
angular.module("listaTelefonica").controller("detalhesContatoCtrl", function($scope, contato) {
    $scope.contato = contato.data;
});