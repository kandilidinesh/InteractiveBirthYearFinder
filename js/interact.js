document.getElementById("yearOfBirth").style.display = 'none';

function calculate(){
  var age = document.getElementById("age").value;
  if(age <= 0 || age > 100 || age == null){
    alert("Enter a valid age (1-100).")
    return;
  }
  var date = new Date().getFullYear();
  document.getElementById("yearOfBirth").style.visibility='visible';
  document.getElementById("yearOfBirth").style.display = 'block';
  var year = date - age;
  document.getElementById("yearOfBirth").innerHTML ="Your Year of Birth:" + year;
  return;
}

document.getElementById("findYear").onclick = function () {
  calculate();
}
