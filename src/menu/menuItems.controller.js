(function () {
  'use strict';

  angular.module('restuarant')
    .controller('MenuItemsController',MenuItemsController_fn);

  MenuItemsController_fn.$inject = ['menuItemData'];
  function MenuItemsController_fn(menuItemData) {
    this.items = menuItemData;
    // console.log(this.items);
  };

})()
