catalogController.$inject = ['$scope', 'session', '$state', 'masterGridService' ];
function catalogController($scope, session, $state, masterGridService){
    var self = this;

    self.user = {
        name: 'Тестович'
    }; //TODO: add session logic

    self.currentCatalog = $state.params.catalogId;
    self.navigateBack = function() { $state.go('catalogs'); };

    self.masterGridOptions = masterGridService.prepareGrid(self.currentCatalog);

    self.masterSearchWindow = function() {
        console.log($state.current.name + '.search');
        $state.go($state.current.name + '.search');
    };

    self.masterInverseSelection = function() {
        $scope.$broadcast('masterInverseSelection');
    };
}

module.exports = catalogController;