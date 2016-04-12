"use strict";

var catalogsModule = angular.module('app.catalogs', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('catalogs', {
            url: '/catalogs',
            template: require('./catalogs.html'),
            controller: require('./catalogs.controller.js'),
            controllerAs: 'catalogsCtrl'
        });
    }]);

module.exports = catalogsModule;