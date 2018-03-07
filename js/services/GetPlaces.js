services.factory('GetPlaces', function($resource) {
    return {
        searchByNameCityState: function(queryParams) {
            queryParams.qtdepaginas = false;

            return $resource(localhostAPI+'procurarLugares/', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        
                    }
                }
            }).query(queryParams);
        },
        searchByNameCityStateQtdePages: function(queryParams) {
            queryParams.qtdepaginas = true;

            return $resource(localhostAPI+'procurarLugares/', {}, {
                query: {
                    method: 'GET',
                    params: {
                        
                    }
                }
            }).query(queryParams);
        },
        getPlace: function(queryParams) {
            return $resource(localhostAPI+'places/', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        
                    }
                }
            }).query(queryParams);
        }/*,
        searchByNameCityStatePaginado: function(strBuscaParam, pageParam) {
            return $resource('http://localhost:53010/procurarLugares/:page/:strBusca', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        strBusca: strBuscaParam,
                        page: pageParam
                    }
                }
            }).query();
        },
        searchByNameCityStateQtdePages: function(strBuscaParam) {
            return $resource('http://localhost:53010/procurarLugares/:strBusca/qtdePaginas', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        strBusca: strBuscaParam
                    }
                }
            }).query();
        },
        searchByNameCityStateFilter: function(strBuscaParam, categoryParam, starsParam, priceParam) {
            return $resource('http://localhost:53010/procurarLugaresFiltrado/:strBusca/:category/:stars/:price', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        strBusca: strBuscaParam,
                        category: categoryParam,
                        stars: starsParam,
                        price: priceParam
                    }
                }
            }).query();
        },
        searchByNameCityStateFilterPaginado: function(pageParam, strBuscaParam, categoryParam, starsParam, priceParam) {
            return $resource('http://localhost:53010/procurarLugaresFiltrado/:page/:strBusca/:category/:stars/:price', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        strBusca: strBuscaParam,
                        category: categoryParam,
                        stars: starsParam,
                        price: priceParam,
                        page: pageParam
                    }
                }
            }).query();
        },
        searchByNameCityStateFilterQtdePages: function(strBuscaParam, categoryParam, starsParam, priceParam) {
            return $resource('http://localhost:53010/procurarLugaresFiltrado/:strBusca/:category/:stars/:price/qtdePaginas', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        strBusca: strBuscaParam,
                        category: categoryParam,
                        stars: starsParam,
                        price: priceParam
                    }
                }
            }).query();
        },
        searchByNameCityStateFilterNoCategory: function(strBuscaParam, starsParam, priceParam) {
            return $resource('http://localhost:53010/procurarLugaresFiltradoSemCategoria/:strBusca/:stars/:price', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        strBusca: strBuscaParam,
                        stars: starsParam,
                        price: priceParam
                    }
                }
            }).query();
        },
        searchByNameCityStateFilterNoCategoryPaginado: function(pageParam, strBuscaParam, starsParam, priceParam) {
            return $resource('http://localhost:53010/procurarLugaresFiltradoSemCategoria/:page/:strBusca/:stars/:price', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        strBusca: strBuscaParam,
                        stars: starsParam,
                        price: priceParam,
                        page: pageParam
                    }
                }
            }).query();
        },
        searchByNameCityStateFilterNoCategoryQtdePages: function(strBuscaParam, starsParam, priceParam) {
            return $resource('http://localhost:53010/procurarLugaresFiltradoSemCategoria/:strBusca/:stars/:price/qtdePaginas', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        strBusca: strBuscaParam,
                        stars: starsParam,
                        price: priceParam
                    }
                }
            }).query();
        }*/
    }
});