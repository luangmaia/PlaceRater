app.controller('InicialCtrl', function($scope, GetTopPlaces) {
    $scope.topPopulares = GetTopPlaces.getTopPopulares(4);
    $scope.topAvaliados = GetTopPlaces.getTopAvaliados(4);
    $scope.topCustoBeneficio = GetTopPlaces.getTopCustoBeneficio(4);
});