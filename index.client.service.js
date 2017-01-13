// This is for Phillip to develop an angular service
(function() {
  'use strict';

  angular.module('indexService', [])
  .service('indexService', function($http, $state) {
    //
    var animal;

    var setAnimal = function(x) { animal = x; };

    //
    this.getAnimal = function() { return animal; };

    //
    this.findAnimal = function(request) {
      // make an http request to the /spiritanimal route (routes.js)
      $http.post('/spiritanimal', request)
      .then(function(response) {
        setAnimal(response.data.spiritanimal); //set animal to db response
        if(animal)
          $state.go('spiritanimal');
      }, function(err) {
        console.log('No dice!');
        window.location = 'http://just-shower-thoughts.tumblr.com/';
      });
    };
  });
})();
