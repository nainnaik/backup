
function reverseString(stringInput) {
	var reverse=[];
	for (var i=stringInput.length-1; i >= 0 ; i--){	  
	  	reverse.push(stringInput[i]);  //push method adds elements to array   
	 }
	 //console.log(reverse);
	 return reverse.join("");
}
	console.log(reverseString("123"));

//console.log(reverse);

// drawback : strings , numbers are immutable, ever time iteration gives new element & its take more memory space 
function reverseMe(userInput){
	var reverse=[];
	var arr=[];
	for (var i=userInput.length-1; i>=0;i--){
		reverse +=userInput[i] ;	

	} return reverse +" "+ userInput;	
	
} 
console.log(reverseMe("hello"));

//  Incrementing/decrementing for-loop with two arrays


function reverse(s) {
  var o = [];
  for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
    o[j] = s[i];
  return o.join('');
} console.log(reverse("love"));

// using charAt every char is pushed on to new array
function reverse(s) {
  var o = [];
  for (var i = 0, len = s.length; i <= len; i++)
    o.push(s.charAt(len - i));
  return o.join('');
}
console.log (reverse("baby")); 



//data structure : Array Set Map Tree
/*
Array[4,3,9,3,2,0,10] [5]
	-	Store group of related data sequencial in memory 16 bit(2 byes) + 16 bi
	- iterate over an array 
	- can store duplicate valus
	- items are ordered in the order pushed
	- look up an item in array of size n is n (notation Big O ->O(n) aka time complexity) worst
	- we use index  

Set {}
	- no duplicates
	- not guarteed ordered when interating

*/