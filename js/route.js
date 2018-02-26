app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'view/inicial.html',
        controller: 'InicialCtrl'
    });

    $routeProvider.when('/busca', {
        templateUrl: 'view/busca.html',
        controller: 'BuscaCtrl'
    });

    $routeProvider.when('/info', {
        templateUrl: 'view/info_avaliacao.html',
        controller: 'InfoCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});