"use strict";

var servicesModule = angular
    .module('app.services', [ ])

    .service('api', require('./api.service.js'))
    .service('session', require('./session.service.js'))
    .factory('goodsApi', require('./goods.service.js'));

module.exports = servicesModule;