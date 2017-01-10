(function(){

'use strict';

	angular.module("NarrowItDownApp",[])
	.controller("NarrowItDownController",NarrowItDownController)
	.service("MenuSearchService",MenuSearchService);
	
	NarrowItDownController.$inject=["MenuSearchService"];//INJECT SERVICE IN CONTROLLER
	function NarrowItDownController(MenuSearchService){
		var menu=this;
		menu.getMatchedMenuItems = function() {
			//console.log("in controller");
			var promise = MenuSearchService.getMatchedMenuItems(menu.itemName);
			promise.then(function(result){
				//menu.items = result.matchedMenuItems;
				menu.items = result;
				
			})
			.catch(function (error)	{
				console.log("something gone wrong");
			});			
		};

		menu.removeItem = function (itemIndex) {
		    console.log("'this' is: ", this);
		    this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
		    MenuSearchService.removeItem(itemIndex);
		    
		  };
	}

	MenuSearchService.$inject=["$http"]; //inject http
	function MenuSearchService($http){

		var service=this;
		var matchedMenuitems=[];

		service.getMatchedMenuItems =function(itemName){
			var response = $http({
					method:"GET",
					url:("https://davids-restaurant.herokuapp.com/menu_items.json")
			})
			.then(function(response) {
				var allMenuItems = response.data.menu_items;
				matchedMenuitems=[];
				
				for(var index in allMenuItems) {
					var description = allMenuItems[index].description.toLowerCase();
					// console.log(description);					

					if(description!= -1) {	
						//console.log("** " + description);
						matchedMenuitems.push(allMenuItems[index].description);
						
						
						 console.log(allMenuItems[index].description);


					}	
				}				
				
				return matchedMenuitems;
			})
			.catch(function (error)	{
				console.log("something gone wrong");
			});

			return response;
		};
		

	 	service.removeItem = function (itemIndex) {
   			foundArray.splice(itemIndex, 1); 
   		};
   	}	














})();
