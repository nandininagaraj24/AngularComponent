var vmScreenModule = angular.module('vmScreenModule', []);


vmScreenModule.directive('vmScreen', function () {
    return {
		
        restrict: 'EA',
		scope: {},
        templateUrl: "VMScreen.html",
        controller: ['$scope', function ($scope) {
                
                
                $scope.status = "ERROR";
                $scope.name="Hello";
           
        }]
    };
});