'use strict';

/**
 * @ngdoc function
 * @name johnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the johnApp
 */
angular.module('johnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
