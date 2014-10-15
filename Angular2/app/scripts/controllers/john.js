'use strict';

/**
 * @ngdoc function
 * @name angular2App.controller:JohnCtrl
 * @description
 * # JohnCtrl
 * Controller of the angular2App
 */
angular.module('angular2App')
  .controller('JohnCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
