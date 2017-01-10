(function(){
	'use strict';
	
	angular.module('lunchChecker',[])
		.controller("LunchCheckController", function($scope) {
			$scope.menu='';
			$scope.MenuItems='';
			$scope.msg;

		$scope.lunchCount =function() {
			var totalMenuItem=calculateLunchItem($scope.menu);
			$scope.MenuItems=totalMenuItem;
		};
			
			function calculateLunchItem(str){						
				var menuLength =str.split(",");	
				if(!str.trim()){
				$scope.msg="Please enter data first";
				}
				else if(menuLength.length<= 3){
						$scope.msg= "Enjoy!!";
				}
				else{
					 $scope.msg="Too Much!!";
					}
				
			}		

		});
	 	
})(); 
	