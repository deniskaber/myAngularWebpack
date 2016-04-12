"use strict";

require('./catalog.less');
var catalogModule = angular.module('app.catalog', [])
    .factory('masterGridService',require('./masterGrid.service.js'))
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('catalog', {
            url: '/catalog/{catalogId}',
            template: require('./catalog.html'),
            controller: require('./catalog.controller.js'),
            controllerAs: 'catalogCtrl'
        });
    }]);

module.exports = catalogModule;