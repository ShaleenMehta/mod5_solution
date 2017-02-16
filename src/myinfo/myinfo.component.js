(function () {
  'use strict';

  angular.module('restuarant')
    .component('myInfo',{
      templateUrl: 'html/myInfo.html',
      bindings:{
        userDetails: '<'
      }
    });

})()
