
function checkPalindrom(userInput){
	//var originalInput;
	 //userInput = userInput.toLowerCase();
	 //originalInput = userInput; // to store userinput 
	 
	 var reverse=[];	
	for (var i=userInput.length-1; i>=0;i--){ // reverse the user input
		reverse +=userInput[i] ;
	} 

	if(userInput==reverse){
		return "its palindrom";
	}
	else{
		return "sorry not palindrom";
	}
 	
} 
console.log (checkPalindrom("hello"));
console.log(checkPalindrom("madam"));
console.log(checkPalindrom("jayesh"));
