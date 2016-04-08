angular.module('LoginMod').controller('LoginCtrl',['$scope', '$http', 'toastr', function($scope, $http, toastr){
  console.log('Login Controller Init...');

  $scope.runLogin = function() {
    $http.put('/login', {
      email: $scope.email,
      password: $scope.password
    }).then(function onSuccess(){
      window.location('/');
    }).catch(function onError(err){
      if(err.status === 400 || 404) {
        toastr.error('Invalid Credentials', 'Error', {
          closeButton: true
        });
        return;
      }
    })
  };
}])