app.controller('InfoCtrl', function($scope, $routeParams, GetPlaces, GetRates, PostRate, DeleteRate, $sessionStorage) {
    $scope.$storage = $sessionStorage;
    console.log($routeParams.Name+" - "+$routeParams.City+" - "+$routeParams.State);
    var places = GetPlaces.getPlace({ Name: $routeParams.Name, State: $routeParams.State, City: $routeParams.City });
    $scope.ordemRates = "Stars";
    $scope.ordemReversa = true;
    $scope.indexFoto = 0;

    var carregarAvaliacoes = function() {
        carregarAvaliacaoGeral();
        
        $scope.rates = GetRates.getRatesPlace($scope.lugar.Name, $scope.lugar.City, $scope.lugar.State);
        $scope.rates.$promise.then(function() {
            console.log($scope.rates);
        });

        if ($sessionStorage.user != null) {
            $scope.userRate = GetRates.getRate($sessionStorage.user.Login, $scope.lugar.Name, $scope.lugar.City, $scope.lugar.State);
            $scope.userRate.$promise.then(function() {
                $scope.jaAvaliou = true;
                $scope.comment = $scope.userRate.Comment;
            }, function() {
                $scope.jaAvaliou = false;
            });
        }
    }

    var carregarAvaliacaoGeral = function () {
        $scope.lugar.avgStars = GetRates.getAvgStarsPlace($scope.lugar.Name, $scope.lugar.City, $scope.lugar.State);
        $scope.lugar.avgPrices = GetRates.getAvgPricePlace($scope.lugar.Name, $scope.lugar.City, $scope.lugar.State);
        $scope.lugar.qtdeRates = GetRates.getQtdePlace($scope.lugar.Name, $scope.lugar.City, $scope.lugar.State);

        $scope.lugar.qtdeRates.$promise.then(function() {
            $scope.lugar.qtdeRates = Math.ceil($scope.lugar.qtdeRates.qtde);
        });

        $scope.lugar.avgPrices.$promise.then(function() {
            $scope.lugar.avgPrices = Math.ceil($scope.lugar.avgPrices.avg);
        });

        $scope.lugar.avgStars.$promise.then(function() {
            $scope.lugar.avgStars = Math.ceil($scope.lugar.avgStars.avg);
        });
    };

    places.$promise.then(function () {
        console.log(places);
        $scope.lugar = places[0];
        carregarAvaliacoes();
    });



    $scope.chooseStars = function(qtdeStars) {
        $scope.starsChoice = qtdeStars;
    };

    $scope.chooseDollars = function(qtdeDollars) {
        $scope.priceChoice = qtdeDollars;
    };

    $scope.enviarAvaliacao = function() {
        PostRate.postRate({
            Login: $sessionStorage.user.Login,
            Name: $scope.lugar.Name,
            City: $scope.lugar.City,
            State: $scope.lugar.State,
            Stars: $scope.starsChoice,
            Price: $scope.priceChoice,
            Comment: $scope.comment
        }).$promise.then(function() {
            carregarAvaliacoes();
        });
    };

    $scope.deletarAvaliacao = function() {
        DeleteRate.deleteRate({
            Login: $sessionStorage.user.Login,
            Name: $scope.lugar.Name,
            City: $scope.lugar.City,
            State: $scope.lugar.State
        }).$promise.then(function() {
            carregarAvaliacoes();
        });
    };

    $scope.ordenarPor = function(criterio) {
        if ($scope.ordemRates === criterio) {
            $scope.ordemReversa = !$scope.ordemReversa;
        } else if (criterio !== 'Login') {
            $scope.ordemReversa = true;
        } else {
            $scope.ordemReversa = false;
        }

        $scope.ordemRates = criterio;
    };

    $scope.fotoAnterior = function() {
        if ($scope.indexFoto > 0) {
            $scope.indexFoto --;
        }
    };

    $scope.proximafoto = function() {
        if ($scope.indexFoto < $scope.lugar.Images.length-1) {
            $scope.indexFoto ++;
        }
    };
});