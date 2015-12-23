var acomsysAdminSignUpApp = angular.module("acomsysAdminLoginApp", []);


acomsysAdminSignUp.controller('adminLoginController', ['$scope', function($scope){
    $scope.log = function() {
	console.log($scope.emailAddress);
    }
}]);