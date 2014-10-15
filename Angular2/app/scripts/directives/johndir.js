'use strict';

/**
 * @ngdoc directive
 * @name angular2App.directive:johnDir
 * @description
 * # johnDir
 */
angular.module('angular2App')
  .directive('johnDir', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the johnDir directive');
      }
    };
  });
