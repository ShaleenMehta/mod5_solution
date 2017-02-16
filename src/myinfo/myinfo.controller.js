(function () {
  'use strict';

  angular.module('restuarant')
    .controller('MyInfoController',MyInfoController_fn);

  MyInfoController_fn.$inject = ['UserData'];
  function MyInfoController_fn(UserData) {
    this.UserData = UserData;
  };
})()
