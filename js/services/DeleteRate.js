services.factory('DeleteRate', function($resource) {
    return {
        deleteRate: function(rate) {
            return $resource(localhostAPI+'rates/', {}, {
                query: {
                    method: 'DELETE',
                    params: {
                    }
                }
            }).query(rate);
        }
    }
});