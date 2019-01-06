// Liudmila Zyrianova
// Assignment 3 JS Problem 4 and Problem 6
// 1/7/2019

// Problem 4: Checks password, if not 12345678, does not reload page, but changes header
function checkForm() {
    var pw = document.forms["myForm"]["password"].value;
    if (pw != "12345678") {
      alert("Incorrect Password");
      return false;
    } else {
            document.getElementById("idHeader").innerHTML = "Information is correct!";
    }
}

//Problem 6: Calculates the volume of the sphere and gives the user information back as an alert
function calculateVolume() {
    var radius = document.forms["myForm"]["radius"].value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    alert("Volume is: " + volume);
}