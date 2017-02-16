(function () {
  'use strict',

  angular.module('common')
    .service('MenuSvc',MenuSvc_fn)
    .constant('baseUrl','https://shaleenmehta-course5.herokuapp.com/');

  MenuSvc_fn.$inject = ['$http', 'baseUrl'];
  function MenuSvc_fn($http, baseUrl) {
    var svc = this;

    svc.getCategories = function () {
      return $http({url: (baseUrl + 'categories.json')})
      .then(function (response){return response.data;});
    };

    svc.getItemList = function (item) {
      return $http({
        url: (baseUrl + 'menu_items.json'),
        params: {category: item}
      })
      .then(function (response){return response.data;});
    };

    svc.getItemDetail = function (itemNumber) {
      return $http({
        url: (baseUrl + 'menu_items/'+ itemNumber +'.json'),
      })
      .then(function (response){return response.data;});
    };
  };
})()
