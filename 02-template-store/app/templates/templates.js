angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/templates', {
			templateUrl: 'templates/templates.html',
			controller: 'TemplatesCtrl'
		});
}])

.controller('TemplatesCtrl', ['$scope', function($scope){
	console.log($scope);
}]);