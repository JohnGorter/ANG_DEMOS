'use strict';

describe('Controller: JohnCtrl', function () {

  // load the controller's module
  beforeEach(module('angular2App'));

  var JohnCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JohnCtrl = $controller('JohnCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
