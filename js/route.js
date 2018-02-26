app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'view/inicial.html',
        controller: 'InicialCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});