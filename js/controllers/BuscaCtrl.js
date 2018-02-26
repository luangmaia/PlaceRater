app.controller('BuscaCtrl', function($scope) {
    $scope.categorias = [];
    $scope.categorias.push({
        name: "Bar"
    });
    $scope.categorias.push({
        name: "Hotel"
    });
    $scope.categorias.push({
        name: "Monumentos"
    });



    $scope.lugaresResultado = [];
    $scope.lugaresResultado.push({
        image: "http://s2.glbimg.com/YXuZNyYL3I2LJuQCs2fA79qnWE0=/i.glbimg.com/og/ig/infoglobo1/f/original/2016/06/21/estatua.jpg",
        name: "Estátua da Liberdade",
        sumStars: 20,
        qtdeStars: 4,
        avgStars: 5,
        sumPrices: 20,
        qtdePrices: 5,
        avgPrices: 4,
        categories: ['Monumento']
    });
    $scope.lugaresResultado.push({
        image: "https://media-cdn.tripadvisor.com/media/photo-s/03/00/74/4b/slieve-bloom-bar.jpg",
        name: "Slieve Bloom Bar",
        sumStars: 20,
        qtdeStars: 5,
        avgStars: 4,
        sumPrices: 23,
        qtdePrices: 6,
        avgPrices: 4,
        categories: ['Bar']
    });
});