(function() {
  'use strict';

  angular.module('spiritAnimalController', ['indexService'])
  .controller('spiritAnimalController', function($scope, indexService) {
    //
    $scope.animal = indexService.getAnimal();
  });
})();
