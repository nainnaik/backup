(function(){
	'use strict';
	angular.module("ShoppingListApp",[])
	.controller("ShoppingListAddController", ShoppingListAddController)
		.controller("ShoppingShowController",ShoppingShowController)
				.service("ShoppingListService",ShoppingListService);

	ShoppingListAddController.$inject=["ShoppingListService"];

	function ShoppingListAddController(ShoppingListService){
		var itemAdder =this;

		itemAdder.itemName='';
		itemAdder.itemQuantity='';

		itemAdder.addItem=function(){
			 ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
		}
	}

	ShoppingShowController.$inject=['ShoppingListService'];
		function ShoppingShowController(ShoppingListService){
			var showList=this;
			showList.items=ShoppingListService.getItems();
		}
	

	function ShoppingListService(){
		var service=this;
		var items=[];//list of shopping item

		service.addItem=function(itemName,quantity){
			var item={
				name:itemName,
				quantity:quantity
			};
			items.push(item);
		};
		service.removeItem=function(itemIndex){
			items.splice(itemIndex,1)

		}
		service.getItems=function(){
			return items;
		};
	
		
	}
})();