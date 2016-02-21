'use strict';

angular.module('myContacts.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
	var ref = new Firebase('https://my-angular-contacts.firebaseio.com/contacts');

	$scope.contacts = $firebaseArray(ref);
	//console.log($scope.contacts);

	$scope.showAddForm = function(){
		$scope.addFormShow = true;
	}
}]);