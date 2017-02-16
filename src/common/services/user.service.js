(function () {
  'use strict',

  angular.module('common')
    .service('UserSvc',UserSvc_fn);

  function UserSvc_fn() {
    var svc = this;
    var User = function (loadDefault) {
      this.FirstName = loadDefault ? 'Shaleen' : '';
      this.LastName = loadDefault ? 'Mehta' : '';
      this.EmailAddress = loadDefault ? 'shaleenmehta@yahoo.com' : '';
      this.PhoneNumber = loadDefault ? '(647)515-6479' : '';
      this.status = 'pristine';
      this.FavoriteDish = {
        short_name: loadDefault ? 'DK' : '',
        status: 'pristine'
      };
    };
    var userObj = new User();

    svc.User = function(loadDefault) {
      if(userObj.status !== 'valid'){
        userObj = new User(loadDefault);
      }
      return userObj;
    };

  };
})()
