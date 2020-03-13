// Assignment Code
var generateBtn = document.querySelector("#generate");
//password length
var passLength;
//emtpy array
var newPass = [];
var pass = "";

// Write password to the #password input
function writePassword() {
  generatePassword();

  var password = pass;

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // calling functions
  length();
  choices();
  makePass();
  function length() {
    passLength = prompt("How many long do you want the password?");
  
    if (passLength < 8) {
      alert("Password needs to be at least 8 characters long.")
      length();
    }
    else if (passLength > 128) {
      alert("Password can't be more than 128 characters long.")
      length();
    }
  }


  
function choices(){

  //alpha array
  var alphaList = "abcdefjhijklmnopqrstuvwxyz".split("");
  //alpha uppercase array
  var alphaUpperList = "ABCDEFJHIJKLMNOPQRSTUVWXYZ".split("");
  //number array
  var numList = "0123456789".split("");
  //special array
  var specList = "!@#$%^&*()-_=+`~/|{}[]:;.,><?".split("");

  //confirms for boolean
  var yesUpper = confirm("Do you want uppercase letter?")
  var yesLower = confirm("Do you want lowercase letters?")
  var yesNum = confirm("Do you want numbers?")
  var yesSpec = confirm("Do you want special characters?")
  //if all false restart
  if (yesUpper === false && yesLower === false && yesNum === false && yesSpec === false){
    alert("You need to choose at least one!")
    choices();
    //adding to empty array to make a new array with what we want
  } if (yesUpper === true){
    newPass = [...newPass, ...alphaUpperList];
  } if (yesLower === true){
    newPass = [...newPass, ...alphaList];
  } if (yesNum === true){
    newPass = [...newPass, ...numList];
  } if (yesSpec === true){
    newPass = [...newPass, ...specList];
  }
}

function makePass(){

  for (i=0; i < passLength; i++){
    pass += newPass[Math.floor(Math.random()*newPass.length)]
  }

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
