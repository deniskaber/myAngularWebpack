catalogsController.$inject = [ 'session', '$state' ];
function catalogsController(session, $state){
    var self = this;

    self.navigate = navigate;

    function navigate(catalog) {
        console.log(catalog);
        $state.go(catalog);
    }

}

module.exports = catalogsController;