<!DOCTYPE html>  
  <html>  
  <head>  
  <meta charset="utf-8">  
  <title>JavaScript current day and time</title>  

  </head>  
  <body>
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(6);
  mountain(4);
  flat(6);
  mountain(1);
  flat(2);
  return result;
};

console.log(landscape());

</body>
</html>