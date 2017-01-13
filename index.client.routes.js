(function() {
  'use strict';

  angular.module('index', ['ui.router', 'indexController', 'spiritAnimalController'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '',
        views: {
          'main': { templateUrl: './home.html', controller: 'indexController' }
        },
        params: {}
      })
      .state('spiritanimal', {
        url: '/spiritanimal',
        views: {
          'main': { templateUrl: './spiritanimal.html', controller: 'spiritAnimalController' }
        },
        params: {}
      });

    $urlRouterProvider.otherwise('http://just-shower-thoughts.tumblr.com/');
  });
})();
