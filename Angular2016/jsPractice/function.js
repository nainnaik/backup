
/*Function block technique: creates a closure around the entire contents
of the file which, perhaps most importantly, 
creates a private namespace and thereby helps avoid potential name clashes
 between different JavaScript modules and libraries.*/
(function() {
   var a = b = 5;
})();
console.log(b); //5
//--------****----

function hello(){
 var d = c = 5;
 console.log("called");
 return d+c;
}
console.log(hello()); // 10 
//------**--

function helo(){
 var d = c = 5;
 console.log("helo function called");
}
helo();//we are calling empty function,will result as "undifine".no return value

//console.log("helo  called" +" "+helo());
//----**-----

// hoisting inside the function will show "undefine".variable initilize after calling 
 var text = 'outside';
 function logIt(){
     console.log(text);
    var text = 'inside';        
 }
 logIt();


 //gobal and local variable name is same. REsult: local variable kills global variable.
 //variables in JavaScript are function-scoped. global variables are properties of the global object 
 var text = 'i am outside of the function';
 function logIt(){     
     text = 'i am inside of the function';  
    console.log(text);
 }
 logIt();
 console.log(text);
 


 // global variable

 var x = "outside f1 & f2 function";
	var f1 = function() {
  		var x = "inside f1";
  		console.log("called f1 function gives global variable");

	};
f1();

console.log("variable x: "+ x); // shows global variable */

var f2 = function() {
    x = "inside f2";
    
};
f2();
console.log("called f2 function give local variable")
console.log("variable x: "+ x); // shows inside variable 


