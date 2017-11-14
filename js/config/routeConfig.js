angular.module("listaTelefonica").config(function($routeProvider, $locationProvider) {
    /* Sem isso, precisa ter o prefix default (!) '#!/contatos.' */
    $locationProvider.hashPrefix("");

    $routeProvider.when("/novoContato", {
        templateUrl: "views/novoContato.html",
        controller: "novoContatoCtrl",
        resolve: {
            operadoras: function(operadorasService) {
                return operadorasService.getOperadoras();
            }
        }
    });

    $routeProvider.when("/contatos", {
        templateUrl: "views/contatos.html",
        controller: "listaTelefonicaCtrl",
        resolve: {
            contatos: function(contatosService) {
                return contatosService.getContatos();
            }
        }
    });

    $routeProvider.when("/contatos/:id", {
        templateUrl: "views/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            contato: function(contatosService, $route) {
                return contatosService.getContato($route.current.params.id);
            }
        }
    });

    $routeProvider.when("/accordions", {
        templateUrl: "views/accordions.html",
        controller: "accordionsCtrl"
    });

    $routeProvider.otherwise({redirectTo: "/contatos"});
});