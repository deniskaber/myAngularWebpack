require('./index.less');

var app = angular.module('myApp',[
        'ui.router',
        'ui.bootstrap',
        'ui.grid',
        'ui.grid.selection',
        require('./services/services.module.js').name,
        require('./../states/login/login.module.js').name,
        require('./../states/catalog/catalog.module.js').name,
        require('./../states/catalogs/catalogs.module.js').name
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $stateProvider.state('default', {
            url: '',
            abstract: true,
            views: {}
        });
        $urlRouterProvider.otherwise('/login');
    
    }]);

app.controller('mainController', ['$scope', function($scope) {
        $scope.user = {
            name: 'Anonymus'
        };

        $scope.counter = 0;

        $scope.$watch(
            function() { console.log('digest'); }
        );
    }]);

module.exports = app;