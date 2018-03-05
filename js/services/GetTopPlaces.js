services.factory('GetTopPlaces', function($resource) {
    return {
        getTopPopulares: function(qtdeParam) {
            return $resource(localhostAPI+'toppopulares/:qtde', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        qtde: qtdeParam
                    }
                }
            }).query();
        },
        getTopAvaliados: function(qtdeParam) {
            return $resource(localhostAPI+'topavaliados/:qtde', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        qtde: qtdeParam
                    }
                }
            }).query();
        },
        getTopCustoBeneficio: function(qtdeParam) {
            return $resource(localhostAPI+'topcustobeneficio/:qtde', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        qtde: qtdeParam
                    }
                }
            }).query();
        }
    }
});