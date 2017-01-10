(function(){

	//iffy-when the parser encounters the function keyword, 
			//it knows to parse it as a function expression and not a function declaration
	//testCompare();
	//testLogicalOperators();
	//testBreakContinue();
	//testLexicalScoping();
	//testFunctionValues();
	console.log(testRecursion(4));
})();

function testRecursion(num) {
//factorial
//e.g 3! = 3*2*1=6
	if(num<0) {
		return "No negative num please!!"
	}
	//base condition
	if(num===1){
		return 1;
	}
	return num * testRecursion(num-1);	

}

function testFunctionValues() {

	var funcName = function() {
		console.log("i am a function");
	}

	funcName();	

	funcName = 2;

	console.log(funcName);
	//funcName(); error
}

function testLexicalScoping() {
	var level1 = "level 1";
	{
		//no scope created.
		//let someVar = 2;
	}

	var innerFunc = function() {
		var level2 = "level 2";

		var innerMostFunc = function() {
			console.log(level1);
			console.log(level2);
		}

		innerMostFunc();
	};

	innerFunc();
	
}

function testBreakContinue() {
	var age = [10,20,30,41,51];

	console.log("test break...");
	for(var i=0;i<age.length;i++) {
		if(age[i]>30) { 
			break;
		}
		console.log(age[i]);	
	}

	console.log("test continue...");

	for(var i=0;i<age.length;i++) {
		if(age[i] < 30) { 
			continue;
		}
		console.log(age[i]);	
	}

}


function testTertiaryOperator() {
	var x = 2;
	var flag; 
	if(x>0) {
		console.log("yes");
	}
	else {
		console.log("no");
	}

	x>0?flag=true:flag=false;
	console.log(flag)

}

function testCompare() {

""==false?console.log("yes"):console.log("no");
""===false?console.log("yes"):console.log("no");

}

function testLogicalOperators() {
	var firstName = "jayesh";
	var lastName = "jadhav"

	//console.log("" || null);

	""||null?console.log("yeah true"):console.log("opps false");
	""||lastName?console.log("yeah true"):console.log("opps false");
	firstName||null?console.log("yeah true"):console.log("opps false");

}
