goodsController.$inject = ['$scope', 'session', 'goodsApi', '$log'];
function goodsController($scope, session, goodsApi, $log) {
    var self = this;
    var paginationOptions = {
        pageNumber: 1,
        pageSize: 15,
        sort: null
    };

    self.isCollapsed = false;
    self.goods = [];
    self.slave_goods = [];

    $scope.$on('masterInverseSelection', function() {
        $log.log('onMasterInverseSelection in goodsController');
        inverseSelection(self.masterGridApi.grid);
    });

    activate();

    function activate() {


        self.masterGridOptions = {
            enableFiltering: true,
            onRegisterApi: function (gridApi) {
                self.masterGridApi = gridApi;
                gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                    paginationOptions.pageNumber = newPage;
                    paginationOptions.pageSize = pageSize;
                    getGoods();
                });
            },

            paginationPageSize: paginationOptions.pageSize,
            useExternalPagination: true,
            useExternalSorting: true,

            enableRowSelection: true,
            enableSelectAll: true,
            selectionRowHeaderWidth: 35,
            multiSelect: true,
            rowHeight: 35,
            columnDefs: [
                {displayName: 'Статус', name: 'Status', width: 120},
                {displayName: 'ID', name: 'ID', width: 80},
                {displayName: 'Код', name: 'Code', width: 110},
                {displayName: 'Короткое название', name: 'ShortName', width: 200},
                {displayName: 'Полное название', name: 'Name', width: 200, visible: false},
                {displayName: 'Черновое название', name: 'TempName', width: 200},
                {displayName: 'Категория', name: 'Category', width: 110},
                {displayName: 'Продукция ОТ', name: 'From', width: 150},
                {displayName: 'Производитель', name: 'Manufacturer', width: 150},
                {displayName: 'Бренд', name: 'Brand', width: 125},
                {displayName: 'Саббренд', name: 'SubBrand', width: 150},
                {displayName: 'Сегмент', name: 'Segment', width: 80},
                {displayName: 'Сабсегмент', name: 'SubSegment', width: 100},
                {displayName: 'Цвет чая', name: 'TeaColor', width: 120, visible: false},
                {displayName: 'Тип упаковки внешней', name: 'ExternalPack', width: 180, visible: false},
                {displayName: 'Тип упаковки саше', name: 'SachetPack', width: 150, visible: false},
                {displayName: 'Тип упаковки внутренней', name: 'InternalPack', width: 200, visible: false},
                {displayName: 'Упаковка Хорека', name: 'isHorekaPack', width: 155, visible: false},
                {displayName: 'Количество пакетов', name: 'BagQty', width: 165, visible: false},
                {displayName: 'Вес пакета', name: 'BagWeight', width: 100, visible: false},
                {displayName: 'Вес', name: 'Weight', width: 80, visible: false},
                {displayName: 'Вес (группа)', name: 'WeightGroup', width: 120, visible: false},
                {displayName: 'Аромат', name: 'isWithFlavor', width: 80, visible: false},
                {displayName: 'Ароматы', name: 'Flavor', width: 166, visible: false},
                {displayName: 'Добавка', name: 'isWithAdding', width: 80, visible: false},
                {displayName: 'Добавки', name: 'Adding', width: 166, visible: false},
                {displayName: 'Ценовой сегмент', name: 'PriceSegment', width: 150, visible: false},
                {displayName: 'Страна происхождения', name: 'Country', width: 185, visible: false},
                {displayName: 'Сорт кофе', name: 'CoffeeSort', width: 125, visible: false},
                {displayName: 'Кофеин', name: 'isCaffeine', width: 80, visible: false},
                {displayName: 'Акционная позиция', name: 'Gift', width: 195, visible: false},
                {displayName: 'Тип подарка', name: 'GiftType', width: 120, visible: false},
                {displayName: 'Фотография', name: 'Photo', width: 115, visible: false},
                {displayName: 'Длина', name: 'Length', width: 80, visible: false},
                {displayName: 'Ширина', name: 'Width', width: 80, visible: false},
                {displayName: 'Высота', name: 'Height', width: 80, visible: false},
                {displayName: 'Весовой продукт в сети', name: 'isWeightNet', width: 190, visible: false},
                {displayName: 'Комментарий', name: 'Comment', width: 125, visible: false},
                {displayName: 'Коллекция/Доп.имя', name: 'Collection', width: 165, visible: false},
                {displayName: 'Частная марка сети', name: 'isPrivateMark', width: 165, visible: false},
                {displayName: 'Штрихкод', name: 'Barcode', width: 115, visible: false},
                {displayName: 'Агрегирующая позиция', name: 'Parent', width: 200},
                {displayName: 'Автор изменений', name: 'Author', width: 170},
                {displayName: 'Дата последнего изменения', name: 'DateChange', width: 225, visible: false},
                {displayName: 'Источник данных', name: 'DataSource', width: 170}
            ]
        };

        self.slaveGridOptions = {
            enableFiltering: true,
            onRegisterApi: function (slaveGridApi) {
                self.slaveGridApi = slaveGridApi;
            },
            enableRowSelection: true,
            enableSelectAll: true,
            selectionRowHeaderWidth: 35,
            multiSelect: true,
            rowHeight: 35,
            columnDefs: [
                {displayName: 'ID', name: 'ID', width: 80},
                {displayName: 'Код', name: 'Code', width: 80},
                {displayName: 'Код Орими', name: 'OrimiCode', width: 100},
                {displayName: 'Название', name: 'Name', width: 250},
                {displayName: 'Продукция ОТ', name: 'From', width: 150},
                {displayName: 'Производитель', name: 'Manufacturer', width: 150},
                {displayName: 'Бренд', name: 'Brand', width: 125},
                {displayName: 'Категория', name: 'Category', width: 110},
                {displayName: 'Сегмент', name: 'Segment', width: 80},
                {displayName: 'Цвет чая', name: 'TeaColor', width: 120},
                {displayName: 'Тип упаковки', name: 'Pack', width: 180},
                {displayName: 'Количество пакетов', name: 'BagQty', width: 165},
                {displayName: 'Вес пакета', name: 'BagWeight', width: 100},
                {displayName: 'Вес', name: 'Weight', width: 80},
                {displayName: 'Ценовой сегмент', name: 'PriceSegment', width: 150},
                {displayName: 'Страна происхождения', name: 'Country', width: 185},
                {displayName: 'Источник', name: 'DataSource', width: 215},
                {displayName: 'Дата привязки', name: 'DateChange', width: 130},
                {displayName: 'авто/ручн', name: 'SyncType', width: 100}
            ]
        };

        getGoods().then(function () {
            $log.info('Activated Goods View');
        });

        self.masterGridOptions.data = self.slave_goods;
    }

    function getGoods() {
        return goodsApi.getGoods()
            .then(function (data) {
                //console.dir(data);
                self.masterGridOptions.data = data.items;
                self.masterGridOptions.totalItems = 1000;
                return data;
            });
    }

    function inverseSelection(grid) {
        grid.rows.forEach(function (row) {
            row.setSelected(!row.isSelected);
        });
    }

}

module.exports = goodsController;