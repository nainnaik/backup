
(function(){
	//testForEachArray();
	//testReverse("1223");
	//testReverse("hello");
	testMaths(2,4);
})();



function testForEachArray(){
	var ar=[123,123142,123546];
	ar.forEach(function(d){
	console.log(d);
	});
}


function testReverse(userInput){
	var reverseUser=[];
		for (var i= userInput.length-1; i >= 0 ; i--){	  
			reverseUser.push(userInput[i]);
		}
	console.log (reverseUser.join(""));
} 

function testMaths(x,y){
	 y=x+3;
console.log("power x raised to n "+ Math.pow(x,y));
}



	//console.log(testReverse("1223"));
	 //console.log(one("hello"));



