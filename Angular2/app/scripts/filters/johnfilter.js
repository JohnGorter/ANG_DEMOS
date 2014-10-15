'use strict';

/**
 * @ngdoc filter
 * @name angular2App.filter:johnFilter
 * @function
 * @description
 * # johnFilter
 * Filter in the angular2App.
 */
angular.module('angular2App')
  .filter('johnFilter', function () {
    return function (input) {
      console.log(
        "JohnFilter currently executing.."
      )
      return 'johnFilter filter: ' + input;
    };
  });
