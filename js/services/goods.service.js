goodsService.$inject = ['$http', '$log'];
function goodsService($http, $log) {

    return {
        getGoods: getGoods
    };

    function getGoods() {
        return $http.get('/angular-webpack-test/test_data/api.php?act=getMasterGoods&searchall=&page=1&start=0&limit=12')
            .then(getGoodsComplete)
            .catch(getGoodsFailed);

        function getGoodsComplete(response) {
            return response.data;
        }

        function getGoodsFailed(error) {
            $log.error('XHR Failed for getGoods.' + error.data);
        }
    }

}

module.exports = goodsService;