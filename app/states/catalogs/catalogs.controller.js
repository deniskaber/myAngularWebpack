catalogsController.$inject = [ 'session', '$state' ];
function catalogsController(session, $state){
    var self = this;

    self.navigate = navigate;

    function navigate(catalog, params) {
        console.log(catalog, params);
        $state.go(catalog, {'catalogId': params});
    }

}

module.exports = catalogsController;