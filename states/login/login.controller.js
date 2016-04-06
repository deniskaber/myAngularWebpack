loginController.$inject = [ 'session','$state' ];
function loginController(session, $state){
    var self = this;

    self.user = { };

    this.doLogin = function () {
        //var result;

        session.login(self.user).then(function(result) {
            if (result) {
                console.log('login success');
                $state.go('catalogs');
            } else {
                console.log('login fail');
            }
        });
    };

    this.doFakeHttpLogin = function () {
        //var result;

        session.fakeLogin(self.user).then(function(result) {
            if (result) {
                alert('Успешно');
            } else {
                alert('Логин / пароль не подходит');
            }
        });
    };

    console.log('success');
}

module.exports = loginController;