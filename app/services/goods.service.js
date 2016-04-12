goodsService.$inject = ['$http', '$log'];
function goodsService($http, $log) {

    return {
        getMasterCatalogData: getMasterCatalogData
    };

    function getMasterCatalogData(params) {


        return $http.get('/angular-webpack-test/test_data/api.php',{
            params: {
                act: params.apiMethod,
                page: params.pageNumber,
                start: (params.pageNumber - 1)*params.pageSize,
                limit: params.pageSize
            }
        })
        .then(masterCatalogDataComplete)
        .catch(masterCatalogDataFailed);

        function masterCatalogDataComplete(response) {
            return response.data;
        }

        function masterCatalogDataFailed(error) {
            $log.error('XHR Failed for '+params.apiMethod+'.' + error.data);
        }
    }

}

module.exports = goodsService;