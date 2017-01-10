(function(){
	angular.module("PreschoolApp",['ngRoute']);

		angular.module('PreschoolApp').config(function($routeProvider){
			$routeProvider
				.when('/',{
					controller: 'PreschoolController',
					templateUrl: '../app/views_preschool/classrooms.html'				
				})
				

				.otherwise({ redirectTo:'/' });
		});


 }());