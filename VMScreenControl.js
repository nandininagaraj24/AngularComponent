
var vmScreenModule = angular.module('vmScreenModule', []);


vmScreenModule.directive('vmScreen', function () {
    return {
		
        restrict: 'E',
		scope: {},
        templateUrl: "VMScreen.html",
        controller: ['$scope', function ($scope) {
                
                
                $scope.status = "OK";
                $scope.name="Critical VMs";
		$scope.description = "All my business-critical VMs.";
		$scope.path = "/TINTRI/CRITICAL-VMs";
		$scope.numOfVMs = "16";
		$scope.numOfErrors = "2";
           
        }]
    };
});

vmScreenModule.config(['$locationProvider', function($locationProvider) {
    /*$locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });*/
    $locationProvider.html5Mode(true);
}]);
