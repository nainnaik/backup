
//testPropoerty();
//testObjects();  
//testObjectAsMap();
testArrayForEach();

function testArrayForEach() {
	var a = ["blue","red","yellow"];
	a.forEach(function(color){
	

	});

}
function testObjectAsMap() {

	var menuMap = {};
	menuMap["pizza"] = 10;
	menuMap["coke"] = 2;
	menuMap["chips"] = 4;

	console.log(menuMap["pizza"]);

	var newMap = new Map();

	newMap.add(); 

}

function compareObjects(obj1,obj2) {
	var result = obj1.value === obj2.value?true:false; 
	return result;
}

function testObjects() {
	var obj1 = {
		value : 10,
		equals : function(obj) {
					return this.value === obj.value
				}
	};
	var obj2 = {value : 11}

	//console.log(compareObjects(obj1,obj2));
	console.log(obj1.equals(obj2));

}


function testPropoerty() {

var i = "length";
var a = [1,2];
console.log(a.length);
console.log(a[i]);

}