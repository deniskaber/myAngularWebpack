/**
 * Created by Денис on 11.04.2016.
 */
catalogConfigs.$inject = ['$http'];
function catalogConfigs($http) {
    return {
        goods: {
            master: {
                apiMethod: 'getMasterGoods',
                columns: [
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
            }
        },
        stores: {
            master: {
                apiMethod: 'getMasterStores',
                columns: [
                    {displayName: 'Статус', name: 'Status', width: 160},
                    {displayName: 'ID', name: 'ID', width: 80},
                    {displayName: 'Код', name: 'Code', width: 130, visible: false},
                    {displayName: 'Название', name: 'Name', width: 200},
                    {displayName: 'Черновой адрес', name: 'TempAddress', width: 180},
                    {displayName: 'Индекс', name: 'PostCode', width: 100, visible: false},
                    {displayName: 'Округ', name: 'County', width: 110, visible: false},
                    {displayName: 'Регион', name: 'Region', width: 110, visible: false},
                    {displayName: 'Район', name: 'District', width: 120, visible: false},
                    {displayName: 'Город', name: 'City', width: 130, visible: false},
                    {displayName: 'Улица', name: 'Street', width: 120, visible: false},
                    {displayName: 'Дом', name: 'Building', width: 80, visible: false},
                    {displayName: 'Полный адрес', name: 'FullAddress', width: 150},
                    {displayName: 'Адрес', name: 'Address', width: 140, visible: false},
                    {displayName: 'Дивизион', name: 'Division', width: 100},
                    {displayName: 'Участок', name: 'Sector', width: 100},
                    {displayName: 'Канал', name: 'Channel', width: 100},
                    {displayName: 'Подканал', name: 'SubChannel', width: 100},
                    {displayName: 'Формат', name: 'Format', width: 100},
                    {displayName: 'Сеть', name: 'isNetName', width: 100},
                    {displayName: 'Название сети', name: 'Net', width: 120},
                    {displayName: 'Тип сети', name: 'NetType', width: 110},
                    {displayName: 'Отв. менеджер', name: 'RespManager', width: 180},
                    {displayName: 'КАИ Nielsen', name: 'isNielsen', width: 110},
                    {displayName: 'Грузополучатель ОРИМИ', name: 'isConsignee', width: 150},
                    {displayName: 'Группа контрагентов', name: 'ContractorGroup', width: 220},
                    {displayName: 'Субдистрибьютор', name: 'isSubDistributor', width: 220},
                    {displayName: 'Дата открытия ТТ', name: 'DateOpen', width: 160},
                    {displayName: 'Дата закрытия ТТ', name: 'DateClose', width: 160},
                    {displayName: 'Площадь ТТ', name: 'ShopArea', width: 120, visible: false},
                    {displayName: 'Координаты', name: 'Coordinates', width: 120, visible: false},
                    {displayName: 'GLN', name: 'GLN', width: 100, visible: false},
                    {displayName: 'Комментарий', name: 'Comment', width: 120, visible: false},
                    {displayName: 'Страна', name: 'Country', width: 120, visible: false},
                    {displayName: 'ФИАС', name: 'FIAS', width: 100, visible: false},
                    {displayName: 'Участвует в РБП', name: 'isInRBP', width: 150, visible: false},
                    {displayName: 'Отв. мерчандайзер', name: 'RespMerch', width: 150, visible: false},
                    {displayName: 'Отв. ТП', name: 'RespTR', width: 170},
                    {displayName: 'Учитывать в расчетах', name: 'isAccounting', width: 170},
                    {displayName: 'Причина неучета', name: 'NonAccReason', width: 170},
                    {displayName: 'Выборка', name: 'Selection', width: 170},
                    {displayName: 'Автор изменений', name: 'Author', width: 170},
                    {displayName: 'Дата последнего изменения', name: 'DateChange', width: 200, visible: false},
                    {displayName: 'Источник данных', name: 'DataSource', width: 170}
                ]
            }
        }
    };
}

module.exports = catalogConfigs;