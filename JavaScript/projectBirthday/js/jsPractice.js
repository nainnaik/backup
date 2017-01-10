
//greeting

//alert("welcome to JS practice")

document.getElementById("header").innerHTML = "Hello JavaScript!";

//display current day , date month and year
	var today= new Date(); 
	var todayDt= today.getDate();
	var currentMonth= today.getMonth();
	var currentYear= today.getYear();
	var day = today.getDay();  
	var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
	var currentYear	= today.getFullYear();  

	document.getElementById("dt").innerHTML="Today is : " + daylist[day] + currentMonth +"/"+ todayDt +"/"+ currentYear + "." ;  

// simple Addition
	var a = parseInt(prompt("Enter first number"));
	var b = parseInt(prompt("Enter second number"));

	document.getElementById("resultAdd").innerHTML ="Addition of two number is: "+ a+b ;
	document.getElementById("resultMulti").innerHTML ="Multiplication of two number is" + a * b;
	document.getElementById("resultDivi").innerHTML ="division is "+ a/b;

// calculate SquareRoot 
 	var sqRoot= prompt("Enter a number to findOut SquareRoot");
 	document.getElementById("resultSq").innerHTML="SquareRoot is: "+ Math.sqrt(sqRoot);
	
	
  // onclick areaBtn calculate area of a triangle
    document.getElementById("areaBtn").addEventListener("click", triangleArea);

     //calculate area of a triangle	
	function triangleArea() {	

		var side1 =parseInt(document.getElementById("one").value);
   	    var side2 =parseInt(document.getElementById("two").value);
		var side3 =parseInt(document.getElementById("three").value);
		var perimeter = (side1 + side2 + side3)/2 ;	
	    var areaOfTriangle =Math.sqrt( perimeter*(perimeter - side1)*(perimeter - side2)*(perimeter - side3) );
		document.getElementById("triangleArea").innerHTML ="Area of triangle is : "+ areaOfTriangle;
	} 
