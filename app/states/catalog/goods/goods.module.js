"use strict";

require('./goods.less');
var goodsModule = angular.module('app.catalog.goods',[])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('catalog.goods', {
            url: '/goods',
            template: require('./goods.html'),
            controller: require('./goods.controller.js'),
            controllerAs: 'goodsCtrl',
            data: {
                title: 'Номенклатура'
            }
        });
    }]);

module.exports = goodsModule;