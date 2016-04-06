catalogController.$inject = [ 'session', '$state' ];
function catalogController(session, $state){
    var self = this;

    self.navigateBack = function() { $state.go('catalogs'); }
}

module.exports = catalogController;