loginController.$inject = [ 'session' ];
function loginController(session){
    var self = this;

    self.user = { };

    this.doLogin = function () {
        //var result;

        session.login(self.user).then(function(result) {
            if (result) {
                alert('Успешно');
            } else {
                alert('Логин / пароль не подходит');
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