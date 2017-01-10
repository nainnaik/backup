(function(){
	var customersFactory= function(){
		var customers= [
							{id:1,joined:'2001-08-21', name:'poppy', city:'ny', orderTotal:300,
								orders:[ 
										{ id:1, product: "ipad", total:300 }	
										]
							},
							{ id:2,joined:'2012-11-28', name:'mesi', city:'nj', orderTotal:560,
								orders:[ 
										{ id:2, product: "mac", total:550},	
										{ id:3, product:"itune",total:10}
										]
							},
							{id:3,joined:'2016-01-01', name:'daisy', city:'dc', orderTotal:60,
								orders:[ 
										{ id:3, product: "bat", total:50},	
										{ id:3, product:"ball",total:10}
										]
							},
							{id:4,joined:'2003-08-21', name:'popy', city:'ny', orderTotal:595.50,

							orders:[ 
										{ id:4, product: "mac", total:550},	
										{ id:3, product:"itune",total:45.50}
										]
							},
							{id:5,joined:'2010-11-28', name:'masi', city:'nj', orderTotal:12,
								orders:[ 
											
										{ id:5, product:"itune",total:10}
										]
							},
						];

					var factory={};
					factory.getCustomers= function(){
						return customers;
					};
			
					factory.getCustomer=function(customerId){
						for(var i=0, len=customers.length;i< len; i++){
											
							if (customers[i].id===parseInt(customerId))							

							{ return customers[i];
							
						}
					}
			return{};

		};
	   return factory;
	};
		
	



		angular.module("customerApp").factory('customersFactory', customersFactory);


}());