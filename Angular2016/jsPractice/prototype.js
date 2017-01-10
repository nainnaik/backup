function Person(firstname,lastname,age,eyecolor) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	console.log("this function invoked");	
}

Person.prototype.getdetails=function(){
	return this.firstname + this.age;
}


var jay= new Person("jay","jadhav","38","black"); // 'new' will invoke Person() function 
console.log(jay.getdetails());

