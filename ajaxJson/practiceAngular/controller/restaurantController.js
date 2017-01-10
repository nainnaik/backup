(function(){

		var RestaurantController = function(RestaurantService,$scope){

			$scope.reverse=false;

			$scope.recipes=[];

			function init(){
				$scope.recipes=RestaurantService.getRecipes();			}

			init();
			
            $scope.doSort=function(propName){ 
            	console.log("function called");             	
            	$scope.sortBy=propName;
            	$scope.reverse=!$scope.reverse;
            };  

    };
    RestaurantController.$inject=["RestaurantService",'$scope'];
    angular.module("restaurantModule").controller("RestaurantController",RestaurantController);

})();