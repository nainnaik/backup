


	  document.getElementById("enDetail").addEventListener("submit",function(e){
		        insertRow(e);      
		    });


	  function insertRow(e) {
	  	e.preventDefault();
        var tableM = document.getElementById("multidata").insertRow();
        var name=tableM.insertCell(0);
        var birthdate=tableM.insertCell(1);
        var mobile=tableM.insertCell(2);
        var groupname=tableM.insertCell(3);
        var delData=tableM.insertCell(4);

       	    name.innerHTML =document.getElementById("eventType").value;
            birthdate.innerHTML =document.getElementById("eDate").value;
            mobile.innerHTML= document.getElementById("mobile").value;
            groupname.innerHTML= document.getElementById("gName").value;
    		delData.innerHTML = "<input id ='del' type='button' value='Delete'>";
      }
