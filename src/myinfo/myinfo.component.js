(function () {
  'use strict';

  angular.module('restuarant')
    .component('myInfo',{
      templateUrl: 'html/myinfo.html',
      bindings:{
        userDetails: '<'
      }
    });

})()
