angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/templates', {
			templateUrl: 'templates/templates.html',
			controller: 'TemplatesCtrl'
		}).
		when('/templates/:templateId', {
			templateUrl: 'templates/template-details.html',
			controller: 'TemplateDetailsCtrl'
		})
}])

.controller('TemplatesCtrl', ['$scope', function($scope){

}])
.controller('TemplateDetailsCtrl', ['$scope', function($scope){

}]);