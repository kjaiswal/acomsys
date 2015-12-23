var acomsysAdminSignUpApp = angular.module("acomsysAdminLoginApp", ['ngMessages']);


acomsysAdminSignUpApp.controller('adminLoginController', ['$scope', function($scope){
    $scope.log = function() {
	console.log($scope.emailAddress);
    }
}]);