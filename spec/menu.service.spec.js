describe('MenuServiceSpec', function () {
  var json_data =
{"id":1,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","created_at":"2017-02-12T22:43:36.554Z","updated_at":"2017-02-12T22:43:36.554Z","category_short_name":"A","image_present":true}

  var menuService;
  var baseUrl;
  var $httpBackend;
  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuService = $injector.get('MenuSvc');
      $httpBackend = $injector.get('$httpBackend');
      baseUrl = $injector.get('baseUrl');
    });
  });

  it('should match an item from $HTTP-service', function () {
    var itemNumber = 'A1';
    $httpBackend.whenGET(baseUrl + 'menu_items/'+ itemNumber +'.json').respond(json_data);
    menuService.getItemDetail(itemNumber).then(function (response){
      expect(response).toEqual(json_data);
    });
    $httpBackend.flush();
  });

  it('should NOT match any item from $HTTP-service', function () {
    var itemNumber = 'xxxxxx';
    $httpBackend.whenGET(baseUrl + 'menu_items/'+ itemNumber +'.json').respond('xxxxxx');
    menuService.getItemDetail(itemNumber).then(function (response){
      expect(response).not.toEqual(json_data);
    });
    $httpBackend.flush();
  });

});
