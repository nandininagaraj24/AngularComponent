var vmScreenModule = angular.module('vmScreenModule', []);


vmScreenModule.directive('vmScreen', function () {
    return {
		
        restrict: 'E',
		scope: {},
        templateUrl: "VMScreen.html",
        controller: ['$scope', function ($scope) {
                
                
                $scope.status = "ERROR";
                $scope.name="Critical VMs";
		$scope.description = "All my business-critical VMs.";
		$scope.path = "/TINTRI/CRITICAL-VMs";
		$scope.numOfVMs = "16";
		$scope.numOfErrors = "2";
           
        }]
    };
});
