"use strict";

var loginModule = angular.module('app.login',[])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('login', {
            url: '/login',
            template: require('./login.html'),
            controller: require('./login.controller.js'),
            controllerAs: 'loginCtrl'
        });
    }])
    /*.directive('login', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            template: require('./login.html'),
            controller: require('./login.controller.js'),
            controllerAs: 'loginCtrl',
            bindToController: true
        };
    })*/;

module.exports = loginModule;