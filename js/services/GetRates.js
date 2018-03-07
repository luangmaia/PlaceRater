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
        },
        getRatesPlace: function(nameParam, cityParam, stateParam) {
            return $resource(localhostAPI+'rates/', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        
                    }
                }
            }).query({ Name: nameParam, City: cityParam, State: stateParam });
        },
        getRate: function(loginParam, nameParam, cityParam, stateParam) {
            return $resource(localhostAPI+'rates/', {}, {
                query: {
                    method: 'GET',
                    params: {
                        
                    }
                }
            }).query({ Login: loginParam, Name: nameParam, City: cityParam, State: stateParam });
        }
    }
});