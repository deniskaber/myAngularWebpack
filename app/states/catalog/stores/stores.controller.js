storesController.$inject = [ 'session' ];
function storesController(session){
    var self = this;

    console.log('storesController');

    this.isCollapsed = false;

}

module.exports = storesController;