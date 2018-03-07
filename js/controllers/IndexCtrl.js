app.controller('IndexCtrl', function($scope, $sessionStorage) {
    $scope.$storage = $sessionStorage;

    $scope.deslogar = function() {
        $sessionStorage.user = null;
    };
});