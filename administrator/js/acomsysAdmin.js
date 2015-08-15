var acomsysAdminSignUp = angular.module("acomsysAdminSignUp", []);


acomsysAdminSignUp.controller('adminSignupController', ['$scope', function($scope){
    $scope.log = function() {
	console.log($scope.emailAddress);
    }
}]);