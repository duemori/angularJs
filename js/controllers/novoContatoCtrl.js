angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, $filter, contatosService, operadoras, serialGenerator, $location) {
    $scope.operadoras = operadoras.data;

    $scope.contato = {data: 1345247999989};

    /* operadorasService.getOperadoras().then(function sucesso(response) {
        $scope.operadoras = response.data;
    }, function erro(e) {
        $scope.message = "Ocorreu um erro " + e.data;
    }); */

    $scope.adicionarContato = function(contato) {
        // $scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone}); -> ruim por ler o scope dentro do controller
        // $scope.contatos.push({nome: nome, telefone: telefone}); -> médio por não ter uma abstração

        contato.data = new Date();
        contato.serial = serialGenerator.generate();

        contatosService.saveContatos(contato).then(function sucesso(response) {
            $location.path("/contatos");
            //$scope.contatos.push(angular.copy(contato));
            // delete $scope.contato;
            // $scope.contatoForm.$setPristine();
        }, function erro(e) {
            $scope.message = "Ocorreu um erro " + e.data;
        })
    }

    $scope.formataOperadora = function(operadora) {
        return operadora.nome + ' ( ' + $filter('currency')(operadora.preco) + ' )';
    }
})