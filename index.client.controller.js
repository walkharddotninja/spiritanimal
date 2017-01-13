// This is for Phillip to develop an angular controller
(function() {
  'use strict';

  angular.module('indexController', ['indexService'])
  .controller('indexController', function($scope, indexService) {
    //
    $scope.show = false;

    $scope.infoSubmit = function() { indexService.findAnimal({firstName: $scope.first, lastName: $scope.last }); };
  });
})();
