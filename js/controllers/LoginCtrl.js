app.controller('LoginCtrl', function($scope, $location, UserService, $sessionStorage) {
    if ($sessionStorage.user != null) {
        $location.url('/');
    }

    $scope.user = {};

    $scope.entrarClick = function() {
        UserService.logarUsuario($scope.user).$promise.then(function(result) {
            $sessionStorage.user = result;
            $location.url('/');
        }, function() {
            $scope.alertIncorreto = true;
        });
    };

    $scope.inputChange = function() {
        $scope.alertIncorreto = false;
    };
});