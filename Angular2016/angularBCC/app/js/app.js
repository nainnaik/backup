(function(){
	angular.module("customerApp",['ngRoute']);

		angular.module('customerApp').config(function($routeProvider){
			$routeProvider
				.when('/',{
					controller: 'CustomersController',
					templateUrl: '../app/views/customer.html'				
				})
				.when('/orders/:customerId',{
					controller: 'OrdersController',
					templateUrl: '../app/views/orders.html'				
				})

				.otherwise({ redirectTo:'/' });
		});


 }());
