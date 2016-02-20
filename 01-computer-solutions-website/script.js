var app = angular.module("computer", ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/main', {
		templateUrl: 'main.html',
		controller: 'MainCtrl'
	});
}])

.controller('MainCtrl');