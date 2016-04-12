/**
 * Created by Денис on 11.04.2016.
 */
masterGridService.$inject = ['$http', '$log', 'catalogConfigs', 'goodsApi'];
function masterGridService ($http, $log, catalogConfigs, goodsApi) {

    return {
        prepareGrid: prepareGrid
    }

    function prepareGrid(catalogId) {
        var masterGridConfig = catalogConfigs[catalogId].master;
        var masterGridOptions = {
                enableFiltering: true,
                paginationPageSize: 15,
                useExternalPagination: true,
                useExternalSorting: true,

                enableRowSelection: true,
                enableSelectAll: true,
                selectionRowHeaderWidth: 35,
                multiSelect: true,
                rowHeight: 35
            };

        var paginationOptions = {
            pageNumber: 1,
            pageSize: 15,
            sort: null,
            apiMethod: masterGridConfig.apiMethod
        };

        masterGridOptions.columnDefs = masterGridConfig.columns;

        masterGridOptions.onRegisterApi = function (gridApi) {
            masterGridOptions.masterGridApi = gridApi;
            gridApi.pagination.on.paginationChanged(null, function (newPage, pageSize) {
                paginationOptions.pageNumber = newPage;
                paginationOptions.pageSize = pageSize;
                getData(paginationOptions);
            });
        };

        getData(paginationOptions);

        function getData(params) {
            goodsApi.getMasterCatalogData(params).then(function (data) {
                masterGridOptions.data = data.items;
                masterGridOptions.totalItems = data.total;
            });
        }

        return masterGridOptions;
    }
}

module.exports = masterGridService;