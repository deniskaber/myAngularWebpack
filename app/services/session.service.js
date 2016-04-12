//var config = require('app.config');

sessionService.$inject = ['api'];
function sessionService(api) {
    var self = this,
        isLoggedIn = false;

    self.user = {};

    self.login = function(user) {

        return api.serverLogin(user)
            .then(
                function(response){
                    console.log('serverLogin success');
                    self.user.login = user.login;
                    self.user.token = response.token;
                    isLoggedIn = true;

                    return isLoggedIn;
                },
                function(error) {
                    console.log('serverLogin error');
                    isLoggedIn = false;

                    return isLoggedIn;
                }
            );
    };

    self.fakeLogin = function(user) {

        return api.fakeHttpServerLogin(user)
            .then(
                function(response){
                    console.log('serverLogin success');
                    self.user.login = user.login;
                    self.user.token = response.token;
                    isLoggedIn = true;

                    return isLoggedIn;
                },
                function(error) {
                    console.log('serverLogin error');
                    isLoggedIn = false;

                    return isLoggedIn;
                }
            );
    };
}

module.exports = sessionService;
