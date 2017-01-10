
//controller
(function(){
	var ControllerName=  function($scope){ //define a controller 

		$scope.something
	};

	ControllerName.$inject=[$scope] //$scope will not get interfere when minification or uglification task run

	angular.module("moduleName").controller("ControllerName", ControllerName) // moduleName is module reference 

})();

//model
(function(){
	
var demoApp= angular.module("moduleName",[]); //[] is for dependency




})();