goodsController.$inject = [ 'session', 'goodsApi', '$log' ];
function goodsController(session, goodsApi, $log){
    var self = this;

    console.log('goodsController');

    this.isCollapsed = false;

    self.goods = [];

    activate();

    function activate() {
        getGoods().then(function() {
            $log.info('Activated Avengers View');
        });

        self.gridOptions = {
            enableFiltering: true,
            onRegisterApi: function(gridApi){
                self.gridApi = gridApi;
            },
            enableRowSelection: true,
            enableSelectAll: true,
            selectionRowHeaderWidth: 35,
            multiSelect: true,
            rowHeight: 35,
            columnDefs: [
                { field: 'ID' },
                { field: 'Name' }
            ]
        };
    }

    function getGoods() {
        return goodsApi.getGoods()
            .then(function(data) {
                console.dir(data);
                self.gridOptions.data = data.items;
                return data;
            });
    }

}

module.exports = goodsController;