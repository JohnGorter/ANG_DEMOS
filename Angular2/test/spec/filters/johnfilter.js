'use strict';

describe('Filter: johnFilter', function () {

  // load the filter's module
  beforeEach(module('angular2App'));

  // initialize a new instance of the filter before each test
  var johnFilter;
  beforeEach(inject(function ($filter) {
    johnFilter = $filter('johnFilter');
  }));

  it('should return the input prefixed with "johnFilter filter:"', function () {
    var text = 'angularjs';
    expect(johnFilter(text)).toBe('johnFilter filter: ' + text);
  });

});
