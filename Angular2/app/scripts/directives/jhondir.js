'use strict';

/**
 * @ngdoc directive
 * @name angular2App.directive:jhondir
 * @description
 * # jhondir
 */
angular.module('angular2App')
  .directive('jhondir', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the jhondir directive');
      }
    };
  });
