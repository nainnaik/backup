function makegreeting(language){

	return function(fname,lname){

		if (language==="en"){
			console.log("hello"+" "+fname);
		}
		if (language==="es"){
			console.log("Hola"+" "+fname +" " +lname);
		}
	}
}
var greetenglish=makegreeting("en");
var greetspanish=makegreeting("es");

greetenglish("jayesh");
greetspanish("sanjana","jadhav");