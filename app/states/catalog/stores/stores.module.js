"use strict";

var storesModule = angular.module('app.catalog.stores',[])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('catalog.stores', {
            url: '/stores',
            template: require('./stores.html'),
            controller: require('./stores.controller.js'),
            controllerAs: 'storesCtrl',
            data: {
                title: 'Торговые точки'
            }
        });
    }]);

module.exports = storesModule;