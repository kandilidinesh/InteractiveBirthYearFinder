document.getElementById("yearOfBirth").style.display = 'none';

function calculate(){
  var age = document.getElementById("age").value;
  if(age <= 0 || age > 100 || age == null){
    alert("Enter a valid age (1-100).")
    return;
  }
}

document.getElementById("findYear").onclick = function () {
  calculate();
}
