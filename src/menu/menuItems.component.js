(function () {
  'use strict';

  angular.module('restuarant')
    .component('menuItem',{
      templateUrl: 'html/menu/menuItem.html',
      bindings:{
        categoryShortName: '<',
        item: '<'
      }
    });
})()
