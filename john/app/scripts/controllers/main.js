'use strict';

/**
 * @ngdoc function
 * @name johnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the johnApp
 */
angular.module('johnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
