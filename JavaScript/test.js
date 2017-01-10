//KeyWord "New": 
//alert("ok");

/*var person = new Object();
person.fisrtName = "J";
person.lastName="Q";
person.age="10";


//Object Literal:


var person = {
firstName:"John", 
lastName: "Doe"; 
age: 50, 
eyeColor:"blue"
};  
*/
//OBJECT CONSTRUCTOR NOTATION. Creat many object of one type 


function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function() {
       return this.firstName + " " + this.lastName;
    } ;
    this.features = function() { 
    	return"my age is"+ this.age +" and my eye color is " + this.eyeColor;
    };

}
var myName= new person("sanjana","jadhav",3,"black");
 
document.getElementById("name").innerHTML ="My name is" +" " + myName.fullName() + "  " + "and" +"  " + myName.features();

/*********************************/

//alert("ok");
//alert(document.getElementById("fName").textContent);
function showName(event,len) {
    var fName = document.getElementById("firstname").value; // html id = firstname
    //alert(fName);
    //document.getElementById("fName").innerHTML ="My first name is"+" " + fName;
    if(fName.length > len) {
        $(document.getElementById("fName")).html("My first name is"+" " + fName); 
    }
    else {
        $(document.getElementById("fName")).html("Please type longer name!!!!!");   
    }    
    //var fName_1 = document.getElementById("fName").innerHTML;
    //alert(fName_1);
}

document.getElementById("firstname").addEventListener('blur',
                                                       function(event) { 
                                                            showName(event,5);
                                                       },
                                                       false);
//$(document.getElementById("firstname")).on('blur',showName);
