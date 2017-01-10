(function(){
	var PreschoolController= function($scope,PreschoolFactory){

		this.filtTxt='';
		
					this.classRooms=classRooms;

					this.select=function(setTab){
						/*				
						switch(setTab) {
							case 1:
								this.filtTxt="Blue Room";
								break;
							case 2:
								this.filtTxt="green Room";		
								break;
								
							case 3:
								this.filtTxt="purple Room";
								break;
							case 4:this.filtTxt="Orange Room";
								break;
							case 5:this.filtTxt="Red Room";
								break;
							case 6:this.filtTxt="Yellow Room"
							break;


							default: 
						}
					*/
						if (setTab===1){
							this.filtTxt="Blue Room";
						}
						else if(setTab===2){
							this.filtTxt="Green Room";
						}
						else if (setTab===3){
							this.filtTxt="Purple Room";
						}
					    else if(setTab===4){
							this.filtTxt="Orange Room";
						}						
						else if(setTab===5){
							this.filtTxt="Red Room";
						}						
						else {
							this.filtTxt="Yellow Room";
						}
					}; 
		};


		PreschoolController.$inject=['$scope','PreschoolFactory']; // uglificationa and minification will not change the name of dependecy like scope
			angular.module("preschoolApp").controller("PreschoolController",PreschoolController);
}());
		
