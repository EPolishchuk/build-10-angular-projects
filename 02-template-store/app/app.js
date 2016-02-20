'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStore', [
  'ngRoute',
  'templateStore.view1',
  'templateStore.view2',
  'templateStore.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
