function bringquad(){
  document.getElementById('quadratic').style.display="block";
  document.getElementById('calcutor').style.display="none";
document.getElementById('btns').innerHTML = '<button title="calculator" ondblclick="bringcalc()"></button>'


} 

function bringcalc(){
  document.getElementById('quadratic').style.display="none";
  document.getElementById('calcutor').style.display="block";
document.getElementById('btns').innerHTML = '<button title="quadratic" ondblclick="bringquad()"></button>'


}
