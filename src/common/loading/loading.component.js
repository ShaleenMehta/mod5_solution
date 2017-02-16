(function () {
  'use strict';

  angular.module('common')
    .component('loading', {
      template: '<img ng-if="$ctrl.show" src = "images/spinner.svg" />',
      controller: LoadingCtrl
    })
    .constant('loadingEvenName','spinner:activate');

    LoadingCtrl.$inject = ['$rootScope', 'loadingEvenName'];
    function LoadingCtrl($rootScope, loadingEvenName) {
      var $ctrl = this;
      var listener;

      $ctrl.$onInit = function () {
        $ctrl.show = false;
        listener = $rootScope.$on(loadingEvenName, onSpinnerActivate)
      };

      $ctrl.$onDestroy = function () {
        listener();
      };

      function onSpinnerActivate(event, data) {
        $ctrl.show = data.on;
      };

    };

})()
