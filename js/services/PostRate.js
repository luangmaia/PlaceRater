services.factory('PostRate', function($resource) {
    return {
        postRate: function(rate) {
            return $resource(localhostAPI+'rates/', {}, {
                query: {
                    method: 'POST',
                    params: {
                    }
                }
            }).query(rate);
        }
    }
});