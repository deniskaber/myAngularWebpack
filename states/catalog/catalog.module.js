"use strict";

require('./catalog.less');
var catalogModule = angular.module('app.catalog', [
        require('./goods/goods.module.js').name,
        require('./stores/stores.module.js').name
    ])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('catalog', {
            url: '/catalog',
            template: require('./catalog.html'),
            controller: require('./catalog.controller.js'),
            controllerAs: 'catalogCtrl'
        });
    }]);

module.exports = catalogModule;