app.controller('BuscaCtrl', function($scope, GetPlaces, GetRates, GetCategories) {
    $scope.placesSearch = [];
    $scope.categorias = [];
    $scope.starFilter = 1;
    $scope.priceFilter = 5;
    var strBuscado = "";
    $scope.categoriaSelecionada = { Name: null};

    $scope.categorias = GetCategories.getAllCategories();
    $scope.categorias.$promise.then(function() {
        if($scope.categorias.length > 0) {
            $scope.categorias.push({ Name: "Todas" });
        }
    });

    var carregarAvaliacoes = function() {
        $scope.placesSearch.$promise.then(function(result) {
            angular.forEach(result, function(place) {
                //Carregar avaliações
                place.avgStars = GetRates.getAvgStarsPlace(place.Name, place.City, place.State);
                place.avgPrices = GetRates.getAvgPricePlace(place.Name, place.City, place.State);
                place.qtdeRates = GetRates.getQtdePlace(place.Name, place.City, place.State);

                place.qtdeRates.$promise.then(function() {
                    place.qtdeRates = Math.ceil(place.qtdeRates.qtde);
                });

                place.avgPrices.$promise.then(function() {
                    place.avgPrices = Math.ceil(place.avgPrices.avg);
                });

                place.avgStars.$promise.then(function() {
                    place.avgStars = Math.ceil(place.avgStars.avg);
                });
            });
        });
    };

    $scope.buscar = function() {
        strBuscado = (' ' + $scope.inputCampoDeBusca).slice(1);
        $scope.paginaAtual = 1;

        if ($scope.inputCampoDeBusca == null) {
            $scope.inputCampoDeBusca = "";
        }

        var objectBusca = { busca: strBuscado, categoria: $scope.categoriaSelecionada.Name, starfilter: $scope.starFilter, pricefilter: $scope.priceFilter };

        var qtdePaginas = GetPlaces.searchByNameCityStateQtdePages(objectBusca);
        objectBusca.page = $scope.paginaAtual;
        $scope.placesSearch = GetPlaces.searchByNameCityState(objectBusca);

        $scope.starFilter = 1;
        $scope.priceFilter = 5;

        carregarAvaliacoes();

        qtdePaginas.$promise.then(function(result) {
            $scope.pages = [];
            for (var i = 0; i < result.qtde; i++) {
                $scope.pages.push(i+1);
            }
        });
    };

    $scope.filtrar = function (categoria, stars = $scope.starFilter, price = $scope.priceFilter) {
        $scope.starFilter = stars;
        $scope.priceFilter = price;
        $scope.paginaAtual = 1;

        if (categoria == null || categoria.Name === "Todas") {
            categoria = { Name: null };
        }
        $scope.categoriaSelecionada = categoria;

        var objectBusca = { busca: strBuscado, categoria: categoria.Name, starfilter: $scope.starFilter, pricefilter: $scope.priceFilter };

        var qtdePaginas = GetPlaces.searchByNameCityStateQtdePages(objectBusca);
        objectBusca.page = $scope.paginaAtual;
        $scope.placesSearch = GetPlaces.searchByNameCityState(objectBusca);

        carregarAvaliacoes();

        qtdePaginas.$promise.then(function(result) {
            $scope.pages = [];
            for (var i = 0; i < result.qtde; i++) {
                $scope.pages.push(i+1);
            }
        });
    };

    $scope.mudarPagina = function(page) {
        $scope.paginaAtual = page;

        var objectBusca = { busca: strBuscado, categoria: $scope.categoriaSelecionada.Name, starfilter: $scope.starFilter, pricefilter: $scope.priceFilter, page: $scope.paginaAtual };
        $scope.placesSearch = GetPlaces.searchByNameCityState(objectBusca);
        carregarAvaliacoes();
    };
});