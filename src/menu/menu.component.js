(function () {
  'use strict';

  angular.module('restuarant')
    .component('menuCategory',{
      templateUrl: 'html/menu/menuCategory.html',
      bindings:{
        allCategories: '<'
      }
    });
})()
