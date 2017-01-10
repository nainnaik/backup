(function(){
					
		var OrdersController= function($scope,$routeParams,customersFactory){
							var customerId=$routeParams.customerId;
							$scope.customer=null;
							function init(){
								//serach the customers for the customer ID
									$scope.customer=customersFactory.getCustomer(customerId)
								}
							
						init();
						

						
		};


			OrdersController.$inject=['$scope','$routeParams','customersFactory']; // uglificationa and minification will not change the name of dependecy like scope
			angular.module("customerApp").controller("OrdersController",OrdersController);
}());