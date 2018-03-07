app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'view/inicial.html',
        controller: 'InicialCtrl'
    });

    $routeProvider.when('/busca', {
        templateUrl: 'view/busca.html',
        controller: 'BuscaCtrl'
    });

    $routeProvider.when('/info/:Name/:City/:State', {
        templateUrl: 'view/info_avaliacao.html',
        controller: 'InfoCtrl'
    });

    $routeProvider.when('/cadastro', {
        templateUrl: 'view/cadastro.html',
        controller: 'CadastroCtrl'
    });

    $routeProvider.when('/login', {
        templateUrl: 'view/login.html',
        controller: 'LoginCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});