'use strict';

describe('Directive: jhondir', function () {

  // load the directive's module
  beforeEach(module('angular2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jhondir></jhondir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jhondir directive');
  }));
});
