var app = angular.module('myApp',[
        require('./services/services.module.js').name
    ]);

app.controller('mainController', ['$scope', function($scope) {
        $scope.user = {
            name: 'Anonymus'
        };

        $scope.counter = 0;

        $scope.$watch(
            function() { console.log('digest'); }
        );
    }])
    .directive('login', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            template: require('./../assets/login.html'),
            controller: require('./login.controller.js'),
            controllerAs: 'loginCtrl',
            bindToController: true
        };
    });

module.exports = app;