services.factory('GetRates', function($resource) {
    return {
        getAvgStarsPlace: function(nameParam, cityParam, stateParam) {
            return $resource(localhostAPI+'avgStarsPlace/:name/:city/:state', {}, {
                query: {
                    method: 'GET',
                    params: {
                        name: nameParam,
                        city: cityParam,
                        state: stateParam
                    }
                }
            }).query();
        },
        getAvgPricePlace: function(nameParam, cityParam, stateParam) {
            return $resource(localhostAPI+'avgPricePlace/:name/:city/:state', {}, {
                query: {
                    method: 'GET',
                    params: {
                        name: nameParam,
                        city: cityParam,
                        state: stateParam
                    }
                }
            }).query();
        },
        getQtdePlace: function(nameParam, cityParam, stateParam) {
            return $resource(localhostAPI+'qtdeRatePlace/:name/:city/:state', {}, {
                query: {
                    method: 'GET',
                    params: {
                        name: nameParam,
                        city: cityParam,
                        state: stateParam
                    }
                }
            }).query();
        }
    }
});