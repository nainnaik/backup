doctype html>
<html>
 
 <head>
		<link herf="http://necolas.github.com/normalize.css/">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		
		<title>Memorial365Form &gt; Memorial365 &gt; Memorial365 Table</title>
		<title>Memorial365 Table</title>
		<link href="../css/grid.css" rel= "stylesheet" type ="text/css">
		<link href="../css/style2.css" rel= "stylesheet" type ="text/css">
		<link href="../css/birthTable.css" rel= "stylesheet" type ="text/css">
 </head>


<style type="text/css">
	table {
    width: 100%;
    border-spacing: 0.5rem;
}

th {
    height: 50px;
}
td {
    padding: 15px;
}
table, td, thead {
    border: 1px solid yellow;
}

th {
    background-color: gray;
    color: white;
}


</style>
 <body>
	<section id="tableImg" class="row" name= "birthdayImg" >
	   <img class="col-1" src="../img/walkingGifts.jpg" alt="gifts"  width="100%"  height="100%">
	</section>
  
    <section>
      <nav>
         <ul>          
          <li><a href="indexHtml5.html">Return to home page</a></li>
          
         </ul> 
      </nav>
    </section>

	<section id= "multiheader1"><h2>Enter multiple Birthdate</h2>

		<form id="enDetail" action="#">
			Person's Name <input id = "name" placeholder="Name" type ="text" required > 
			Event Date <input id="eDate" type ="date" placeholder="Event date" required> 
			Mobile <input id="mobile" type ="number" placeholder="Mobile Number" required > 
			Group Name <input id = "gName" type ="text" placeholder="Enter GroupName" required>
			<input type="submit"  id="addDetails" value="Add and Save" required > 
		</form>
    </section>

    <section>
			<table id ="multidata" style="border: 1px solid black"> 
				<thead>
					<tr>
						 <td >Name</td>
						 <td >Eventdate</td>
						 <td > Mobile Number</td>
						 <td > Group Name</td>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</table>		
	</section>
 <br>
 
 <section>
	
	 <h2 id="multiheader2">HomePage</h2>

    <nav>
      <ul>
          
          <li><a href="indexHtml5.html">Return to home page</a></li>
          
     </ul> 
    </nav>
  </section>
			
					

<footer>
	<h4>&copy; nainjay. All rights reserved.</h4>
</footer>

<script> 
$(document).ready(Function(){
    $('#addDetails').click(function() {
    	var toaddName =$("input[id=name]").val();
	var toaddDate =$("input[id=eDate]").val();
	var toaddMobile =$("input[id=mobile]").val();
	var toaddGr =$("input[id=gname]").val();
	

    });    
    $("").append("<tr><td>toAddName+ toaddDate+toaddMobile+toaddGr+<td></tr>");
});

</script>