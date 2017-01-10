(function(){

	var itemList=['itune','iphone','mac','ipod',"SmartWatch"];
	var buyItemList= [
			{
				name:"itune",
				quantity:"1",
			},
			{
				name:"iphone",
				quantity:"1",

			},
			{
				name:"mac",
				quantity:"2",

			},
			{
				name:"ipod",
				quantity:"4",

			},
			{
				name:"SmartWatch",
				quantity:"2",

			}
		];

		

	
angular.module("ShoppingListCheckOff",[])
	.controller("ToBuyShoppingController",ToBuyShoppingController)
	
	.service("ShoppingListCheckOffService",ShoppingListCheckOffService);
	
		ToBuyShoppingController.$inject=["$scope"];

	function ToBuyShoppingController($scope){
		$scope.itemList=itemList;
		$scope.buyItemList=buyItemList;	
			$scope.addToBoughtlist=function(){


			console.log("clicked");


		};
	}
		

		

})();