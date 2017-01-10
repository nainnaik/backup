var counter=0;
var finished= false;
var target =1;
var a=[];
function doGame(){
	var x=Math.random();
	 
	console.log(x);
	while(!finished){
		a.push(x);
		if (x==target)	{		
		console.log("correct" ); 
		return true;

		}	
	}	

} doGame();
