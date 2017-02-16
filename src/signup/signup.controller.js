(function () {
  'use strict';

  angular.module('restuarant')
    .controller('SignUpController',SignUpController_fn);

  SignUpController_fn.$inject = ['MenuSvc', 'UserSvc'];
  function SignUpController_fn(MenuSvc, UserSvc) {
    var $ctrl = this;

    $ctrl.User = UserSvc.User();

    $ctrl.checkFavoriteDish = function () {
      $ctrl.User.status = 'pristine';
      $ctrl.User.FavoriteDish.status = 'pristine';
      var short_name = $ctrl.User.FavoriteDish.short_name;
      return MenuSvc.getItemDetail(short_name)
        .then(function (response){
                $ctrl.User.FavoriteDish = response;
                $ctrl.User.FavoriteDish.status = 'valid';
                return $ctrl.User.FavoriteDish;
            },function (error){
                $ctrl.User.FavoriteDish = error;
                $ctrl.User.FavoriteDish.short_name = short_name;
                $ctrl.User.FavoriteDish.status = 'invalid';
                return $ctrl.User.FavoriteDish;
            });
    };

    $ctrl.submit = function () {
      $ctrl.User.status = 'pristine';
      if($ctrl.User.FavoriteDish.status === 'pristine'){
        $ctrl.checkFavoriteDish()
          .then(function (response){
                $ctrl.User.status = response.status;
            },function (error){
                $ctrl.User.status = 'invalid';
            });
      }
      else {
        $ctrl.User.status = $ctrl.User.FavoriteDish.status;
      }
    };
  };

})()
