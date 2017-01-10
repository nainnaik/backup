
    function insRow(addRows){
      var rownum= document.getElementById(addRows).insertRow();
      var number=rownum.insertCell(0);
      var animal=rownum.insertCell(1);
      var name=rownum.insertCell(2);
      var age=rownum.insertCell(3);

      number.innerhtml=" ";      
      animal.innerHTML = " ";
      name.innerHTML =" ";
      age.innerHTML= " ";      

    }