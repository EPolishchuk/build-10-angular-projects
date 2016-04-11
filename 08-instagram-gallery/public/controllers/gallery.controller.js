angular.module('galPhoto')

.controller('GalleryCtrl', ['$scope', 'instagram', function($scope, instagram){
	$scope.images = [];
	instagram.fetchPopular(function(data){		
		$scope.images = data;
	});
}])