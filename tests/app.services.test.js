/**
 * Created by Денис on 04.04.2016.
 */
describe('module app.services', function() {

    var successUser = {
        login: 'user',
        password: 'user'
    };

    var failureUser = {
        login: '123',
        password: 'nonexistable'
    }

    beforeEach(angular.mock.module('app.services'));

    it("api.service.serverLogin() right", function () {
        angular.mock.inject(function (api, $timeout) {
            var result;

            api.serverLogin(successUser).then(function(response) {
                result = response;
            });

            $timeout.flush(1000);

            expect(result).toEqual({
                msg: 'success',
                token: 123456789
            });
        });
    });

    it("api.service.serverLogin() wrong", function () {
        angular.mock.inject(function (api, $timeout) {
            var result;

            api.serverLogin(failureUser).then(function(response) {
                result = response;
            },function(response) {
                result = response;
            });

            $timeout.flush(1000);

            expect(result).toEqual({
                msg: 'error'
            });
        });
    });

    it("api.service.fakeHttpServerLogin() right", function () {
        angular.mock.inject(function (api, $httpBackend) {
            var result;

            $httpBackend.expect("GET", "/api/auth", {
                login: 'user',
                password: 'user'
            }).respond({ "msg": 'success', "token": 123456789 });

            api.fakeHttpServerLogin(successUser).then(function(response) {
                result = response.data;
            });

            $httpBackend.flush();

            expect(result).toEqual({
                msg: 'success',
                token: 123456789
            });
        });
    });

    it("api.service.fakeHttpServerLogin() wrong", function () {
        angular.mock.inject(function (api, $httpBackend) {
            var result;

            $httpBackend.expect("GET", "/api/auth", failureUser).respond({ "msg": 'error'});

            api.fakeHttpServerLogin(failureUser).then(function(response) {
                result = response.data;
            },function(response) {
                result = response.data;
            });

            $httpBackend.flush();

            expect(result).toEqual({
                msg: 'error'
            });
        });
    });

    it("session.service.login() right", function () {
        angular.mock.inject(function (session, $timeout) {
            expect(session.user).toEqual({});
            session.login(successUser);

            $timeout.flush(1000);

            expect(session.user).toEqual({
                login: 'user',
                token: 123456789
            });
        });
    });

    it("session.service.login() wrong", function () {
        angular.mock.inject(function (session, $timeout) {
            expect(session.user).toEqual({});

            session.login(failureUser);

            $timeout.flush(1000);

            expect(session.user).toEqual({ });
        });
    });
});