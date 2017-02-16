(function () {
  'use strict';

  angular.module('common')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];
  function routeConfig($stateProvider) {
    $stateProvider
      .state('public',{
        abstract: true,
        templateUrl: 'html/public.html'
      })
      .state('public.home',{
        url: '/',
        templateUrl: 'html/home.html'
      })
      .state('public.menu',{
        url: '/menu',
        template: '<menu-category all-categories="$ctrl.categories"/>',
        controller: 'MenuController as $ctrl',
        resolve:{
          categoriesData: ['MenuSvc', function(MenuSvc) {
            return MenuSvc.getCategories()
              .then(function (response){return response;});
          }]
        }
      })
      .state('public.menuItem',{
        url: '/menu/{item}',
        templateUrl: 'html/menu/menuItems.html',
        controller: 'MenuItemsController as $ctrl',
        resolve:{
          menuItemData: ['MenuSvc', '$stateParams', function(MenuSvc, $stateParams) {
            return MenuSvc.getItemList($stateParams.item)
              .then(function (response){return response;});
          }]
        }
      })
      .state('public.signup',{
        url: '/signup',
        template: '<sign-up />'
      })
      .state('public.myinfo',{
        url: '/myinfo',
        template: '<my-info user-details="$ctrl.UserData" />',
        controller: 'MyInfoController as $ctrl',
        resolve:{
          UserData: ['UserSvc', function(UserSvc) {
            return UserSvc.User();
          }]
        }
      });
  };

})()
