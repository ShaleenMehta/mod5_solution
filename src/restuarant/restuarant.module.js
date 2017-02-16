(function () {
  'use strict';

  angular.module('restuarant',['ui.router','admin', 'common'])
    .config(routeConfig);

  routeConfig.$inject = ['$urlRouterProvider'];
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  };

})()
