(function(global){	

		var ajaxUtils={};

	function getRequestObject(){
		if(window.XMLHttpRequest){
			return (new XMLHttpRequest());
		}
		else if (window.ActiveXObject) {
			return (new ActiveXObject("Microsoft.XMLHTTP"));			
		}
		else{
			global.alert("Ajax is not supported");
			return(null);
		}
	}



	ajaxUtils.sendGetRequest= function(requestUrl,responseHandler,isJsonResponse){//created sendGetRequest function.
																	//sendGetRequest=  send get request to server.
																	// requestURL = where to get request/where to go on the server
																	//responsehandler = handle result fro server
																	
		var request = getRequestObject(); // called getRequetObject function and stored in request
			request.onreadystatechange = //onreadystatechange= Stages in the network communication between the browser & the server
				function(){ 

					handleResponse(request, responseHandler,isJsonResponse); // reuest= pass the request object and 
					console.log("servercome back with response");
				};
				
			request.open("GET",requestUrl,true); //asynchronous response (true = asynchronous and false =synchronous)
			request.send(null); // for post only. this line will execute the rquest and send it to server
		};
		function handleResponse(request, responseHandler){
			if ( (request.readystate== 4) && (request.status==200) ){

				if (isJsonResponse==undefined){
						isJsonResponse=true; 
					}
					if(isJsonResponse)
					{
						responseHandler(JSON.parse(request.responseText));
					}
					else {responseHandler(request.responseText);
						
					
					}	
				}				
			}
		}

		global.$ajaxUtils = ajaxUtils;

	
	
})(window);