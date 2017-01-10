
/*
var name= "Nayana Naik";
var myName = HTMLheaderName.replace("%data%",name);
var role= "web Developer" ;
var myRole= HTMLheaderRole.replace("%data%", role);
var addr = "2300 24th road S, Arlington Va 22206";
var myAddr = HTMLcontactGeneric.replace("%contact%","Address").replace("%data%",addr);
var mobile =7036239393;
var myMobile= HTMLmobile.replace("%data%", mobile);
var email= "nayana.naik@hotmail.com";
var myEmail =HTMLemail.replace("%data%",email);


$("#header").prepend(myRole);
$("#header").prepend(myName);
$("#topContacts").append(myMobile);
$("#topContacts").append(myEmail);
$("#topContacts").append(myAddr);*/  

//  created objects(bio,eduction,work,project) for resume 

var bio={
	"name":"Nayana Naik",
	"role":"Web Developer",
	"contacts": { 
		"mobile":"703+++++++",
		"email":"nayana.naik@hotmail.com",
		"location":"Arlington Va"
	},
	"welcomeMessage":"",
	"skills":["html","CSS","Javascript","jQuery","HTML5","Sass"],
	"pic": "cupcake.jpg"	
}
	/*	function inName(name){

		name = name.trim().split(" ");
		console.log(name);
		name[1]= name[1].toUpperCase();
		name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
		return name[0] + " "+ name[1];

	}
		$("#main").append(internationalizeButton);*/

	
	function displayHeading(){

			if(bio.name.length > 0){

				var myName = HTMLheaderName.replace("%data%",bio.name);
				$("#header").prepend(myName);

			}

			if(bio.role.length > 0){
			var myRole= HTMLheaderRole.replace("%data%",bio.role);
			$("#header").append(myRole);

			}
			if(bio.contacts.mobile.length>0 || bio.contacts.email.length>0 ||bio.contacts.location.length>0   ){
				var myAddr = HTMLcontactGeneric.replace("%contact%","Address").replace("%data%",bio.contacts.location);
;
				var myMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
				var myEmail =HTMLemail.replace("%data%",bio.contacts.email);
					$("#header").append(myMobile);
					$("#header").append(myEmail);
					$("#header").append(myAddr);
			}
		
		if (bio.skills.length>0){
				
			var allskills= HTMLskills.replace("%data%",bio.skills);
				$("#allskills").prepend(HTMLskillsStart);	
				$("#allskills").append(allskills);			
		}
				

	} displayHeading();

var education={
	"schools":[
		 {
			"name":"nlk",
			"city":"nj",
			"degree":"nmkn",
			"majors":["1"],
			"dates": "jan2006-jul2006",
			"url": " "

		 },
		 {
			"name":"",
			"city":"",
			"degree":"",
			"majors":["2"],
			"dates": "",
			"url": " "

		  }
	],		

	"onlineCourses":[
	   {
	   	 "title":"HTML5",
	   	 "school":"CMU",
	   	 "dates":"" ,
	   	 "url":""
	   },

	   {
	   	 "title":"CSS3",
	   	 "school":"CMUs",
	   	 "dates":"jan2006-jul2006",
	   	 "url":""
	   },
	    {
	   	 "title":"Javascript",
	   	 "school":"CMUs",
	   	 "dates":"jan2006-jul2006",
	   	 "url":""
	   },
	    {
	   	 "title":"Angulerjs",
	   	 "school":"",
	   	 "dates":"jan2006-jul2006",
	   	 "url":""
	   }
	]
}
function displayOnlineCourse(){
	for(onlineCourses=0; onlineCourses.length>0 ; onlineCourses++){
		$("#education").append(HTMLonlineClasses);
		var formattedOnlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
			}
} displayOnlineCourse();
	




var work={
	"jobs":[
	   {
	   	"employer": "PoolXing",
	   	"title":"QA Tester",
	   	"date" : "Dec2013-jul2015",
	   	"description":"As a functional tester, for PoolXing’s web based and mobile (iOS) applications, I am responsible for testing various features and functionalities of the web application e.g. mainline functions, usability, accessibility, error conditions and boundary conditions. "
	   },
	   {
	   	"employer": "Siro ClinPharm Inc  ",
	   	"title":"QA Analyst ",
	   	"date" : "jan2006-Aug2008",
	   	"description":"I worked as a QA lead on the clinical trial application for Pfizer. The application helps facilitate pre- processing of oncology clinical trials for Pfizer. and Here I performed testing using Ration Quality Manager used Rational ClearQuest to capture and report defects. "
	   },
	   
	   {
	   	"employer": "Self ",
	   	"title":"Patent Analyst ",
	   	"date" : "jan2006-jul2008",
	   	"description":"bcsowpibbd",
	   }
	   
	 ]
}
	
	function displayWork(){

			for (job in work.jobs){
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
				var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);

				var formattedEmployerTitle=formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle);	

				var formattedDate=HTMLworkDates.replace("%data%",work.jobs[job].date);
				$(".work-entry:last").append(formattedDate);	

				var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);	
			}
	}displayWork();

var projects ={
	"projects":[
	   {

	   	"title":"cdm ",
	   	"date" : "jan2006 jul2006",
	   	"description":"bdbiwjhj",
	   	"images":["","",""]

	   }	
	]
}


var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
console.log(charEscape(html));

