app.controller('InfoCtrl', function($scope) {
    $scope.lugar = {
        image: "http://s2.glbimg.com/YXuZNyYL3I2LJuQCs2fA79qnWE0=/i.glbimg.com/og/ig/infoglobo1/f/original/2016/06/21/estatua.jpg",
        name: "Estátua da Liberdade",
        sumStars: 20,
        qtdeStars: 4,
        avgStars: 5,
        sumPrices: 20,
        qtdePrices: 5,
        avgPrices: 4,
        categories: ['Monumento', 'Sítio Histórico']
    };

    $scope.rates = [
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
    ]
});