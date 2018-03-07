services.factory('UserService', function($resource) {
    return {
        cadastrarUsuario: function(user) {
            return $resource(localhostAPI+'cadastro/', {}, {
                query: {
                    method: 'POST',
                    params: {
                        
                    }
                }
            }).query(user);
        },
        logarUsuario: function(user) {
            return $resource(localhostAPI+'login/', {}, {
                query: {
                    method: 'GET',
                    params: {
                        
                    }
                }
            }).query(user);
        }
    }
});