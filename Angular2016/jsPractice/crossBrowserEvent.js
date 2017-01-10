//CrossBrowerUtility common .check this  https://www.youtube.com/watch?v=4Obi_csTY-c&index=19&list=PLOxOmO43E6JvLzUBTbc9dkNw7xv9BMTnW

var crossBrowser={
   addEvent = function(el, type, fn){
    if(typeof addEventListener!=="undefined"){
   	     el.addEventListener(type, fn, flase);
    } else if (tyoeof attachEvent!=="undefined"){
	     el.addEventListener("on"+type,fn0);
    } else{
	      el["on" + type] =fn;    
    }	

  },

   removeEvent : function(el, type, fn){
     if(typeof removeEventListener!=="undefined"){
   	     el.removeEventListener(type, fn, flase);
    }   else if (tyoeof detachEvent!=="undefined"){
	       el.detachEventListener("on"+type,fn0);
    }  else{
	     el["on" + type] =null;    //DOM level 0 handler
    }	

  },

   getTarget : function(event){
      if (typeof event.target!=="undefined:){
       return event.target;
     }else {
        return event.srcElement; //IE
     }   
  },

   preventDefault : function(event){
    if (typeof event.preventDefault !=="undefined"){
       event.preventDefault();
    }else {
        event.returnValue = false; // IE
    }	

  }
};