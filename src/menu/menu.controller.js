(function () {
  'use strict';

  angular.module('restuarant')
    .controller('MenuController',MenuController_fn);

  MenuController_fn.$inject = ['categoriesData'];
  function MenuController_fn(categoriesData) {
    this.categories = categoriesData;
    // console.log(this.categories);
  };
})()
