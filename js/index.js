require('./index.less');

var app = angular.module('myApp',[
        'ui.router',
        'ui.bootstrap',
        'ui.grid',
        'ui.grid.selection',
        'ui.grid.pagination',
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

app.controller('mainController', ['$rootScope', function($rootScope) {
    window.app = {

    };
    window.app.rootScope = $rootScope;

    window.app.getWatchers = function(root) {
        root = angular.element(root || document.documentElement);
        var watcherCount = 0;

        function getElemWatchers(element) {
            var isolateWatchers = getWatchersFromScope(element.data().$isolateScope);
            var scopeWatchers = getWatchersFromScope(element.data().$scope);
            var watchers = scopeWatchers.concat(isolateWatchers);
            angular.forEach(element.children(), function (childElement) {
                watchers = watchers.concat(getElemWatchers(angular.element(childElement)));
            });
            return watchers;
        }

        function getWatchersFromScope(scope) {
            if (scope) {
                return scope.$$watchers || [];
            } else {
                return [];
            }
        }

        return getElemWatchers(root).length;
    };

    $rootScope.$watch(
            function() { console.log('digest'); }
        );
    }]);

module.exports = app;