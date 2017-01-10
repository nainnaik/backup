
function calculateAge(birthYear){

	if(isNaN(birthYear)){
		console.log("please enter a year(yyyy)");
	}

	else
	{
		var cYear= new Date().getFullYear();
		var age= cYear - birthYear;	
		console.log("your age is "+ age +" or "+ (age-1));
	}	
  
}
calculateAge();
calculateAge("bhjbs");
calculateAge(1978);

//----//-----//

function calculateAgeSupply(currentAge,amtPerDay){
	if(isNaN(currentAge || amtPerDay)){
		console.log("please enter correct data for age or amtperday");
	}
	else 
	{
		var maxAge=100;
		var totalSupply= (amtPerDay*365) *(maxAge - currentAge);
		console.log(totalSupply+ " amount per Day");
	}
}
calculateAgeSupply(20,20);
calculateAgeSupply("jksbk","20");


//
var random=[];
var target=1;
var guess=0;
var finished=false;

function doRandom(){

 	random=console.log(Math.random()); 	
 	random=target;

  while(!finished){
  	
  	guess+=1;
	finished = checkRandom();

 	}
}  doRandom();

function checkRandom(){
 if(random===target){

		console.log("its a target and its number 1");
		
		console.log("total guess " + guess);
		return true;
	}
} 

