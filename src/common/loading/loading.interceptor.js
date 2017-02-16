(function () {
  'use strict';

  angular.module('common')
    .factory('loadingHttpInterceptor', LoadingHttpInterceptor_fn);

    LoadingHttpInterceptor_fn.$inject = ['$rootScope', '$q', 'loadingEvenName'];
    function LoadingHttpInterceptor_fn($rootScope, $q, loadingEvenName) {
      var loadCount = 0;

      return {
        request: function(config) {
          // console.log('Inside interceptor config', config);
          if(++loadCount === 1)
            $rootScope.$broadcast(loadingEvenName, {on: true});
          return config;
        },
        response: function(response) {
          if(--loadCount === 0)
            $rootScope.$broadcast(loadingEvenName, {on: false});
          return response;
        },
        responseError: function(response) {
          if(--loadCount === 0)
            $rootScope.$broadcast(loadingEvenName, {on: false});
          return $q.reject(response);
        }

      };

    };

})()
