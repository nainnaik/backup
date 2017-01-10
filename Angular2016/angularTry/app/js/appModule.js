(function(){
	angular.module("preschoolApp",['ngRoute']);

		angular.module('preschoolApp').config(function($routeProvider){
			$routeProvider
				.when('/index',{
					controller: 'PreschoolController',
					templateUrl: 'C:\Users\Nayana\Documents\Angular2016\angularTry\app\views\index.html'				
				})
				
				.otherwise({ redirectTo:'/' });
		});


 }());