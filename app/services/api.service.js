/*var config = require('app.config'),
    _ = require('underscore');*/

apiService.$inject = ['$http', '$q', '$timeout'];
function apiService($http, $q, $timeout) {
    var self = this;


    self.serverLogin = function(user){
        var deffered = $q.defer();

        $timeout(function(){
            if (user.login === 'user' && user.password === 'user') {
                deffered.resolve({
                    msg: 'success',
                    token: 123456789
                });
            } else {
                deffered.reject({
                    msg: 'error'
                });
            }

        }, 500);

        return deffered.promise;
    };

    self.fakeHttpServerLogin = function(user){

        return $http.get('/api/auth', {data: user});
    };

}

module.exports = apiService;
