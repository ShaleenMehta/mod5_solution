(function () {
  'use strict';

  angular.module('common',[])
    .config(httpConfig);

  httpConfig.$inject = ['$httpProvider'];
  function httpConfig($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }
})()
