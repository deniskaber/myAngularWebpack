catalogController.$inject = ['$scope', 'session', '$state' ];
function catalogController($scope, session, $state){
    var self = this;

    self.user = {
        name: 'Тестович'
    };
    
    self.currentCatalog = $state.current.data.title;

    self.navigateBack = function() { $state.go('catalogs'); };

    self.masterSearchWindow = function() {
        $state.go($state.current.name + '.search');
    };

    self.masterInverseSelection = function() {
        $scope.$broadcast('masterInverseSelection');
    };
}

module.exports = catalogController;