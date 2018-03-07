app.controller('CadastroCtrl', function($scope, $location, UserService, $sessionStorage) {
    if ($sessionStorage.user != null) {
        $location.url('/');
    }

    $scope.user = {};

    $scope.cadastrarClick = function() {
        UserService.cadastrarUsuario($scope.user).$promise.then(function(result) {
            $sessionStorage.user = result;
            $location.url('/login');
        }, function(result) {
            $scope.alertIncorreto = true;
            $scope.mensagemErro = result.data.Message;
            console.log(result.data.Message);
        });
    };

    $scope.inputChange = function() {
        $scope.alertIncorreto = false;
    };
});