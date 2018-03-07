app.controller('InfoCtrl', function($scope, $routeParams, GetPlaces, GetRates, PostRate, DeleteRate) {
    console.log($routeParams.Name+" - "+$routeParams.City+" - "+$routeParams.State);
    var places = GetPlaces.getPlace({ Name: $routeParams.Name, State: $routeParams.State, City: $routeParams.City });
    $scope.ordemRates = "Stars";
    $scope.ordemReversa = true;

    var carregarAvaliacoes = function() {
        carregarAvaliacaoGeral();
        
        $scope.rates = GetRates.getRatesPlace($scope.lugar.Name, $scope.lugar.City, $scope.lugar.State);
        $scope.rates.$promise.then(function() {
            console.log($scope.rates);
        });

        $scope.userRate = GetRates.getRate("user3", $scope.lugar.Name, $scope.lugar.City, $scope.lugar.State);
        $scope.userRate.$promise.then(function() {
            $scope.jaAvaliou = true;
            $scope.comment = $scope.userRate.Comment;
        }, function() {
            $scope.jaAvaliou = false;
        });
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
            Login: "user3",
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
            Login: "user3",
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

    /*$scope.lugar = {
        image: "http://s2.glbimg.com/YXuZNyYL3I2LJuQCs2fA79qnWE0=/i.glbimg.com/og/ig/infoglobo1/f/original/2016/06/21/estatua.jpg",
        name: "Estátua da Liberdade",
        sumStars: 20,
        qtdeStars: 4,
        avgStars: 5,
        sumPrices: 20,
        qtdePrices: 5,
        avgPrices: 4,
        categories: ['Monumento', 'Sítio Histórico']
    };*/

    /*$scope.rates = [
        {
            Name: "luangmaia",
            Stars: 5,
            Price: 4,
            Comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            Name: "leehdmgs",
            Stars: 3,
            Price: 2,
            Comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];*/
});