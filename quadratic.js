function calculate(){
  var a =  document.getElementById('a').value;
  var b =  document.getElementById('b').value;
  var c =  document.getElementById('c').value;
  // var test= ("-b + sqrt(" + b*b + "- " + 4 * a * c +")/" + 2 *a)
  // alert(a);
  var x1 = (-b + Math.sqrt(  
    (
      Math.pow(b, 2)- (4 * a * c) 
      
      ) 
    
    ))/ (2*a); 
  
    var x2 = (-b - ((Math.sqrt(  
      (
        (Math.pow(b, 2))- (4 * a * c)
        
        )
      
      ))))/ (2*a); 
  
    document.getElementById('x1').innerHTML=x1;
    document.getElementById('x2').innerHTML=x2;
  
      }
