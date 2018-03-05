services.factory('GetCategories', function($resource) {
    return {
        getAllCategories: function() {
            return $resource(localhostAPI+'categorias/', {}, {
                query: {
                    method: 'GET',
                    isArray: true,
                    params: {
                        
                    }
                }
            }).query();
        }
    }
});