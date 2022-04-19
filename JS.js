//Calculate Tip
function calculateTip() 
{
  var billamt = document.getElementById("billamt").value;
  var servicequal = document.getElementById("servicequal").value;
  var numppl = document.getElementById("peopleamt").value;

  //validate input
  if (billamt === "" && servicequal == 0) 
  {
    alert("Please enter values");
    return;
  } 
  else if (billamt == 0 || billamt === "")
  {
    alert("Please enter bill amount");
    return;
  }
  else if (servicequal == 0) 
  {
    alert("Please enter service quality");
    return;
  }

  //Check to see if this input is empty or less than or equal to 1
  if (numppl === "" || numppl <= 1) 
  {
    //use 1 by default
    numppl = 1;	
    document.getElementById("each").style.display = "none";
  } 
  else 
  {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (billamt * servicequal) / numppl;

  //round to two decimal places
  total = Math.round(total * 100) / 100;

  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);

  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() 
{
  calculateTip();
};